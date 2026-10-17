$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$inferenceDirectory = Join-Path $projectRoot '.local-inference'
$runtime = Join-Path $inferenceDirectory 'ollama/ollama.exe'
$modelDirectory = Join-Path $inferenceDirectory 'models'

try {
    $models = Invoke-RestMethod -Uri 'http://127.0.0.1:11434/api/tags' -TimeoutSec 3
    Write-Output ('Ollama is already running. Models: ' + (($models.models | ForEach-Object { $_.name }) -join ', '))
    exit 0
} catch {
    # Start the existing portable installation when no service is listening.
}
if (-not (Test-Path -LiteralPath $runtime -PathType Leaf)) {
    throw 'Portable Ollama is missing. Install Ollama or restore .local-inference/ollama/ollama.exe; see docs/GEMMA_SMART_VERIFICATION.md.'
}
if (-not (Test-Path -LiteralPath $modelDirectory -PathType Container)) {
    throw 'The local model directory is missing. Restore or download the configured Gemma model first.'
}
$env:OLLAMA_HOST = '127.0.0.1:11434'
$env:OLLAMA_MODELS = $modelDirectory
$env:OLLAMA_CONTEXT_LENGTH = '4096'
$env:OLLAMA_NUM_PARALLEL = '1'
$env:OLLAMA_MAX_LOADED_MODELS = '1'
$env:OLLAMA_KEEP_ALIVE = '10m'
$serverProcess = Start-Process -FilePath $runtime -ArgumentList 'serve' -WorkingDirectory $inferenceDirectory -WindowStyle Hidden -RedirectStandardOutput (Join-Path $inferenceDirectory 'server.stdout.log') -RedirectStandardError (Join-Path $inferenceDirectory 'server.stderr.log') -PassThru
$serverProcess.Id | Set-Content -LiteralPath (Join-Path $inferenceDirectory 'server.pid')
for ($attempt = 0; $attempt -lt 20; $attempt++) {
    Start-Sleep -Milliseconds 500
    try {
        $models = Invoke-RestMethod -Uri 'http://127.0.0.1:11434/api/tags' -TimeoutSec 2
        Write-Output ('Ollama is ready. Models: ' + (($models.models | ForEach-Object { $_.name }) -join ', '))
        exit 0
    } catch {
        if ($serverProcess.HasExited) { throw 'Ollama exited. Check .local-inference/server.stderr.log.' }
    }
}
throw 'Ollama did not become ready. Check .local-inference/server.stderr.log.'
