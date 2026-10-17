import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FAILURE_MESSAGES = {
  inference_failed: 'The AI service could not complete the analysis. Evidence remains available for human review.',
  timeout: 'AI analysis took too long to finish. Evidence remains available for human review.',
  cancelled: 'AI analysis stopped when the live connection closed. Evidence remains available for human review.',
  evidence_read_failed: 'AI could not read the saved evidence images. Evidence remains available for human review.',
  configuration_failed: 'The AI service needs configuration before analysis can run. Evidence remains available for human review.',
  validation_failed: 'AI output could not be validated. Evidence remains available for human review.',
  quality_check_failed: 'AI findings did not pass quality checks. Evidence remains available for human review.',
  busy: 'The AI service is busy with other submissions. Evidence remains available for human review.',
};

export default function SmartVerification({ analysis }) {
  if (!analysis) return null;
  const findings = analysis.findings;
  return (
    <View style={styles.panel}>
      <Text style={styles.title}>Gemma Smart Verification</Text>
      {analysis.status === 'completed' && findings ? (
        <>
          <Text style={styles.meta}>{analysis.model} · Human decision required</Text>
          <Text style={styles.text}>{findings.assessment}</Text>
          <Text style={styles.text}>Visible categories: {findings.wasteCategories.join(', ') || 'None identified'}</Text>
          <Text style={styles.text}>Cleanup evidence: {findings.cleanupEvidence.replace(/_/g, ' ')}</Text>
          <Text style={styles.text}>Same scene: {findings.sameScene}</Text>
          {[
            ['Visual differences', findings.visualDifferences],
            ['Possible environmental concerns', findings.environmentalConcerns],
            ['Uncertainty and evidence limitations', findings.limitations],
            ['Safe cleanup recommendations', findings.recommendations],
          ].map(([label, items]) => (
            <View key={label}>
              <Text style={styles.label}>{label}</Text>
              {items.length ? items.map((item, index) => (
                <Text key={index} style={styles.text}>• {item}</Text>
              )) : <Text style={styles.meta}>None identified; absence is not a safety assessment.</Text>}
            </View>
          ))}
        </>
      ) : (
        <Text style={styles.text}>
          {analysis.status === 'disabled' ? 'AI verification is disabled. Evidence follows standard human review.'
            : analysis.status === 'pending' ? 'Waiting for the uploader’s live Gemma analysis to finish. Human review will follow.'
            : analysis.status === 'skipped' ? 'AI analysis skipped for exact duplicate evidence.'
              : FAILURE_MESSAGES[analysis.reason] || 'AI analysis unavailable. Evidence remains available for human review.'}
        </Text>
      )}
      {analysis.qualityFlags?.length ? <Text style={styles.meta}>Output quality concerns: {analysis.qualityFlags.map((flag) => flag.replace(/_/g, ' ')).join(', ')}</Text> : null}
      <Text style={styles.meta}>AI findings are advisory. Approval, appeals, and rewards follow the existing review process.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: { backgroundColor: '#091B30', borderColor: '#315574', borderWidth: 1, borderRadius: 10, padding: 12, marginTop: 12 },
  title: { color: '#72D7CA', fontSize: 15, fontWeight: '600', marginBottom: 6 },
  label: { color: '#BBD8F7', fontSize: 13, fontWeight: '600', marginTop: 10 },
  text: { color: '#AFC0D4', fontSize: 13, lineHeight: 20, marginTop: 4 },
  meta: { color: '#93A9C0', fontSize: 12, lineHeight: 18, marginTop: 7 },
});
