import 'dart:io';

void main() {
  // Get the size of the arrays
  print("Enter the size of arrays:");
  int size = int.parse(stdin.readLineSync()!); // Read the size from user input

  // Declare two arrays with the given size
  List<int> array1 = List.filled(size, 0);
  List<int> array2 = List.filled(size, 0);

  // Get values for Array 1 from the user
  getArray(array1, "Array 1");

  // Get values for Array 2 from the user
  getArray(array2, "Array 2");

  // Swap the values of the two arrays
  swapArrays(array1, array2);

  // Display the arrays after swapping
  print("Arrays after swapping:");
  displayArray(array1, "Array 1");
  displayArray(array2, "Array 2");
}

// Function to get values for an array from the user
void getArray(List<int> array, String arraNam) {
  print("Enter the values of $arraNam:");
  for (int i = 0; i < array.length; i++) {
    print("Enter value ${i + 1}:");
    array[i] = int.parse(stdin.readLineSync()!); // Read each value individually
  }
}


// Function to swap the values of two arrays
void swapArrays(List<int> array1, List<int> array2) {
  for (int i = 0; i < array1.length; i++) {
    int temp = array1[i];
    array1[i] = array2[i];
    array2[i] = temp;
  }
}

// Function to display the values of an array
void displayArray(List<int> array, String arrayName) {
  print("$arrayName: ${array.join(', ')}");
}