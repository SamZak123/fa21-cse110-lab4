1. The problem was that since num1 and num2 were passed in as strings, then the result was also a string. Therefore it did not do proper addition, but rather added the two strings together, where the 2nd string was directly after the first string. This led to 2+4 becoming 24, rather than 6. 
2. Fix attached in image below. 
<img width="354" alt="Screen Shot 2021-10-17 at 8 50 25 PM" src="https://user-images.githubusercontent.com/78522169/137667050-f873ca39-02d7-4990-a3b3-81501da78b11.png">
