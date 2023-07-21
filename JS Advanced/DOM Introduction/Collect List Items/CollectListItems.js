function extractText() {
    let listElement = document.getElementsByTagName("li");
    let textBox = document.getElementById("result");
    let string = "";

   for (const item of listElement) {
        textBox.textContent += item.textContent + "\n";
   }

}