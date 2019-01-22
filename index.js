/* eslint-disable no-console */
'use strict';
/* global $ */

function handleMealSubmit(){
  $('.js-meal-details').on('submit',function(event){
    event.preventDefault();
    console.log('user submitted a meal');
  });
}

function main(){
  handleMealSubmit();
}

$(main());