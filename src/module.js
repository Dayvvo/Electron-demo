
export const togglenavbar=(e)=>{
    e.preventDefault();
    let scroller = document.querySelector('.responsiveBar');
    scroller.classList.toggle('displayorNot');
}