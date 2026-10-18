# Input

Users can enter their favorite course in the text box beneath “Which course did you like?” The app also includes built-in content: an icon from the assets folder and a list of MSCS courses added to the code.

# Process
The app is built as a single arrow-function component called App, using React Native’s core components to create the screen. Image displays the icon, Text shows labels and course names, TextInput lets users enter a response, and View groups related elements. A ScrollView lets users move through the screen when its content doesn’t all fit at once. The styles are organized with StyleSheet.create, including the yellow section headers and the input box border.

# Output
The result is a simple, scrollable screen with an icon at the top, a text box for the user’s favorite course, and three highlighted sections. These sections list 8 core courses, 2 depth of study courses, and 1 capstone course.