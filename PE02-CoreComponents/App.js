import React from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

// Arrow function component (required)
const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Image from ./assets */}
      <View style={styles.imageContainer}>
        <Image source={require('./assets/icon.png')} style={styles.image} />
      </View>

      {/* Favorite course input */}
      <Text style={styles.label}>Which course did you like?</Text>
      <TextInput style={styles.input} placeholder="ex. CS624" />

      {/* Core requirements */}
      <Text style={styles.header}>Core Requirements (24 credits)</Text>
      <View>
        <Text style={styles.course}>CS 504 Software Engineering</Text>
        <Text style={styles.course}>CS 506 Programming for Computing</Text>
        <Text style={styles.course}>CS 519 Cloud Computing Overview</Text>
        <Text style={styles.course}>CS 533 Computer Architecture</Text>
        <Text style={styles.course}>CS 547 Secure Systems and Programs</Text>
        <Text style={styles.course}>CS 622 Discrete Math and Algorithms for Computing</Text>
        <Text style={styles.course}>DS 510 Artificial Intelligence for Data Science</Text>
        <Text style={styles.course}>DS 620 Machine Learning & Deep Learning</Text>
      </View>

      {/* Depth of study */}
      <Text style={styles.header}>Depth of Study (6 Credits)</Text>
      <View>
        <Text style={styles.course}>CS 624 Full-Stack Development - Mobile App</Text>
        <Text style={styles.course}>CS 628 Full-Stack Development - Web App</Text>
      </View>

      {/* Capstone */}
      <Text style={styles.header}>Capstone (3 Credits)</Text>
      <View style={styles.lastSection}>
        <Text style={styles.course}>CS 687 Computer Science Capstone</Text>
      </View>
    </ScrollView>
  );
};

// Internal style (required)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', marginTop: 40 },
  imageContainer: { alignItems: 'center', marginVertical: 20 },
  image: { width: 200, height: 200 },
  label: { fontSize: 16, marginLeft: 5 },
  input: {
    height: 40, borderColor: 'gray', borderWidth: 1,
    marginHorizontal: 10, marginBottom: 30, paddingHorizontal: 10,
  },
  header: {
    fontSize: 32, fontWeight: 'bold', backgroundColor: 'yellow',
    paddingHorizontal: 5,
  },
  course: { fontSize: 16, paddingHorizontal: 5, paddingVertical: 2 },
  lastSection: { marginBottom: 40 },
});

export default App;