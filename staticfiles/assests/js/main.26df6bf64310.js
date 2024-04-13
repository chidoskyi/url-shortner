$(document).on('submit', '#post-form', function(e){
    e.preventDefault();

    $.ajax({
        type: 'POST',
        url : '/create',
        data: {
            link: $('#link').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
        },
        success: function(data) {
            console.log(data.url); // Log the complete URL received from the server
            $('h2').html(data.url); // Use the complete URL directly
            
            $('#resultText').text(data.url);

            // Show/hide the copy button based on the content of resultText
            toggleCopyButton();

            // Clear the input field after successful submission
            $('#link').val('');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var shortenButton = document.getElementById('shortenButton');

    shortenButton.addEventListener('click', function() {
        // Change button text to "Shortened!"
        this.value = 'Shortened!';

        // Set a timer to change button text back to "Shorten" after 3 seconds
        setTimeout(() => {
            shortenButton.value = 'Shorten';
        }, 3000);
    });
});


         // Function to show/hide the copy button based on the content of resultText
         function toggleCopyButton() {
            var copyButton = document.getElementById('copyButton');
            var resultText = document.getElementById('resultText');
        
            if (resultText.innerText.trim().length > 0) {
                copyButton.style.display = 'inline';
            } else {
                copyButton.style.display = 'none';
            }
        }
        
        // Execute this function after the DOM content is fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            var copyButton = document.getElementById('copyButton');
        
            // Initially hide the copy button
            copyButton.style.display = 'none';
        
            // Event listener for the copy button
            copyButton.addEventListener('click', function() {
                var textToCopy = document.getElementById('resultText').innerText;
                copyToClipboard(textToCopy);
        
                // Change button text to "copied!"
                this.textContent = 'copied!';
        
                // Change button text back to "copy" after 3 seconds
                setTimeout(function() {
                    copyButton.textContent = 'copy link';
                }, 3000); // 3000 milliseconds = 3 seconds
            });
        });
        
        // Function to copy text to clipboard
        function copyToClipboard(text) {
            var dummyTextarea = document.createElement('textarea');
            document.body.appendChild(dummyTextarea);
            dummyTextarea.value = text;
            dummyTextarea.select();
            document.execCommand('copy');
            document.body.removeChild(dummyTextarea);
        }