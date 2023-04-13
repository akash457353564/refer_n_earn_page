

const name_field = document.querySelector('#name');
const mobile_field = document.querySelector('#mob_num');
const referer_name_field = document.querySelector('#referer_name');
const referer_num_field = document.querySelector('#referer_number');

const name_err = document.querySelector('#name_err');
const num_err = document.querySelector('#num_err');
const ref_name_err = document.querySelector('#ref_name_err');
const ref_num_err = document.querySelector('#ref_num_err');

const submit_btn = document.querySelector('#submit_btn')



const remove_err = function(el_name, err_name){
    el_name.addEventListener('input', ()=>{
        err_name.style.display = 'none'
    })
}

remove_err(name_field , name_err)
remove_err(mobile_field, num_err)
remove_err(referer_name_field, ref_name_err)
remove_err(referer_num_field, ref_num_err)

submit_btn.addEventListener('click', (e)=>{

    const alphabets = /^[a-zA-Z]+$/

    if(!name_field.value){
        e.preventDefault()
        name_err.style.display = 'flex'
    } else if(!mobile_field.value){
        e.preventDefault()
        num_err.style.display = 'flex'
    } else if(mobile_field.value.match(alphabets) || mobile_field.value.length > 10 || mobile_field.value.length < 10 || mobile_field.value.startsWith('1') || mobile_field.value.startsWith('2') || mobile_field.value.startsWith('3') || mobile_field.value.startsWith('4') || mobile_field.value.startsWith('5')){
        e.preventDefault()
        num_err.style.display = 'flex'
        num_err.innerHTML = 'Please enter a valid number'
    } else if(!referer_name_field.value){
        e.preventDefault()
        ref_name_err.style.display = 'flex'
    } else if(!referer_num_field.value){
        e.preventDefault()
        ref_num_err.style.display = 'flex'
    } else if(referer_num_field.value.match(alphabets) || referer_num_field.value.length > 10 || referer_num_field.value.length < 10 || referer_num_field.value.startsWith('1') || referer_num_field.value.startsWith('2') || referer_num_field.value.startsWith('3') || referer_num_field.value.startsWith('4') || referer_num_field.value.startsWith('5')){
        e.preventDefault()
        ref_num_err.style.display = 'flex'
        ref_num_err.innerHTML = 'Please enter a valid number'
    }
})