'use strict';
const faqs = document.querySelectorAll(".sm-line");
const text= document.querySelectorAll(".question")
for (const items of faqs){
    const curr__faqs = items.childNodes;
    console.log(curr__faqs);
    const question = curr__faqs[1];
    const ans = curr__faqs[3];
    const icon = question.querySelector('.arrow');


icon.addEventListener('click', function()
{
    ans.classList.toggle('hidden');
    icon.classList.toggle('active');
    this.parentNode.classList.toggle('q');
   
});
}
