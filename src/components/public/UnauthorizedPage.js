import React from 'react';

export default function() {

      const { authPrivilege } = 'unknown';
      setTimeout(
        function (){
          window.location.assign('/#/')
        }
      , 4000);
      return (
        <div id='UnauthorizedContainer'>
          <div>You are not authorized to view that page you only have <span>{`${authPrivilege}`} privileges.</span></div>
          <div>You will be redirected to the home page in 3 seconds.</div>
        </div>
      );
}
