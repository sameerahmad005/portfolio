<?php
// Specify the directory where your images are located
$imageDirectory = 'images';

// Get all files in the specified directory
$imageFiles = scandir($imageDirectory);

// Filter out any non-image files (directories, '.', '..')
$imageFiles = array_filter($imageFiles, function($file) {
    return !is_dir($file) && preg_match('/\.(jpg|jpeg|png|gif)$/i', $file);
});

// Return image filenames as JSON
echo json_encode(array_values($imageFiles));
?>
