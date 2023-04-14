

const name_field = document.querySelector('#name');
const mobile_field = document.querySelector('#mob_num');
const referer_name_field = document.querySelector('#referer_name');
const referer_num_field = document.querySelector('#referer_number');
const event_date_field = document.querySelector('#event_date')
const event_location = document.querySelector('#event_location')

const name_err = document.querySelector('#name_err');
const num_err = document.querySelector('#num_err');
const ref_name_err = document.querySelector('#ref_name_err');
const ref_num_err = document.querySelector('#ref_num_err');
const city_err = document.querySelector('#city_err')

const tnc_wrapper = document.querySelector('.tnc_wrapper')
const tnc_txt = document.querySelector('.tnc_txt')

const submit_btn = document.querySelector('#submit_btn')

event_date_field.addEventListener('focus', ()=>{
    event_date_field.type = 'date'
})

const remove_err = function(el_name, err_name){
    el_name.addEventListener('input', ()=>{
        err_name.style.display = 'none'
    })
}

remove_err(name_field , name_err)
remove_err(mobile_field, num_err)
remove_err(referer_name_field, ref_name_err)
remove_err(referer_num_field, ref_num_err)
remove_err(event_location, city_err)

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
    } else if(!event_location.value){
        e.preventDefault()
        city_err.style.display = 'flex'
    }
})


tnc_txt.addEventListener('click', ()=>{
    tnc_wrapper.style.display = 'flex'
})

tnc_wrapper.addEventListener('click', ()=>{
    tnc_wrapper.style.display = 'none'
})


const api_call = function(id, childId) {
    
    const cardContainerSearch = document.getElementById(id);
    cardContainerSearch.innerHTML = "";
  
    let request = new XMLHttpRequest();
    let endPoint = new URL(`https://search.betterhalf.ai/search/city?charlist=${event_location.value}`);
    let url = endPoint.toString();
  
    request.open('GET', url, true)
  
    request.onload = function() {
      let suggestions = JSON.parse(this.response)
  
  
      if (request.status >= 200 && request.status < 400) {
  
        suggestions.result.forEach(suggestion => {
          const style = document.getElementById(childId)
          const cardSearch = style.cloneNode(true)
          cardSearch.setAttribute('id', '');
  
          cardSearch.style.display = 'grid';
  
          const search_suggestion = cardSearch.getElementsByClassName('suggestion_txt')[0]
          search_suggestion.textContent = suggestion.city;
  
          const state = cardSearch.getElementsByClassName('state')[0]
          state.textContent = suggestion.state;
  
          const country = cardSearch.getElementsByClassName('country')[0]
          country.textContent = suggestion.country;
  
          cardSearch.onclick = ()=>{
            const location = `${suggestion.city}`
            event_location.value = location;
            cardContainerSearch.innerHTML = "";
          }

          cardContainerSearch.appendChild(cardSearch);
        })
      }
    }
    request.send();
  }

  document.querySelector('#event_location').addEventListener('input', api_call.bind(event, 'Cards-Container_search', 'samplestyle_search'), false);