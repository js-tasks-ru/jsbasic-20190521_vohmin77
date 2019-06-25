'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight ( table )
{

  let cells = table.querySelectorAll( 'td' );
  for ( let i = 0; i < cells.length; i += 1 )
  {
    if ( cells[ i ].getAttribute( 'data-available' ) === "true" )
    {
      cells[ i ].parentElement.classList.add('available' );
    } else if ( cells[ i ].getAttribute( 'data-available' ) === "false" )
    {
      cells[ i ].parentElement.classList.add('unavailable' );
    }
  }
  let rowss = table.querySelectorAll( 'tr > td:last-child' );
  for ( let i = 0; i < rowss.length; i += 1 ) {
    if ( rowss[ i ].hasAttribute( 'data-available' ) === false ) {
      rowss[ i ].parentElement.hidden = true;
    }
  }
  let gend = table.querySelectorAll( 'tr > td:nth-child(3n)' );
  for ( let i = 0; i < gend.length; i += 1 ) {
    if ( gend[ i ].innerHTML === ( 'm' ) ){
      gend[ i ].parentElement.classList.add('male');
    } else if ( gend[ i ].innerHTML === ( 'f' ) ){
      gend[ i ].parentElement.classList.add('female');
    }
  }
  let age = table.querySelectorAll('tr > td:nth-child(2n)');
  console.log(age);
  for ( let i = 0; i < age.length; i += 1 ) {
    if ( +age[ i ].innerHTML < ( 18 ) ){
      age[ i ].parentElement.setAttribute('style', "text-decoration: line-through");
    }
  }

}
