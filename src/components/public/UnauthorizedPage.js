import React from 'react';

export default function() {

      setTimeout(
        function (){
          window.location.assign('/#/')
        }
      , 4000);
      return (
        <div id='UnauthorizedContainer'>
          <div>You are not authorized to view that page.</div>
          <div>You will be redirected to the home page in 3 seconds.</div>
        </div>
      );
}
