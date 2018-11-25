<template>
<div>
<li class="dropdown  	glyphicon glyphicon-bell">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <i class="fa fa-bell-o"></i>
              <span id="number_notification" class="label label-warning">0</span>
            </a>
            <ul id="menu-notification" class="dropdown-menu">
              <li id="menu-header-notification"  class="header">You have 0 notifications</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul id="menu-body-notification"  class="menu">
                  
                </ul>
              </li>
              <li class="footer"><a href="#">View all</a></li>
            </ul>
          </li>
</div>

</template>

<script>
    export default {
        mounted() {
            let root = this.$root;
            let io = root.io;
            let number_notification = $('#number_notification');
            let menu_header = $('#menu-header-notification');
            let count_notification = 0;
            number_notification[0].textContent = count_notification;
            var socket = io(window.location.hostname + ':3000');
            $(function() {
              socket.on('update', function(event){
                // console.log(event);
                count_notification+=1;
                number_notification[0].textContent = count_notification;
                menu_header[0].textContent = "You have "+count_notification+" notifications";
                $('#menu-body-notification').append('<li><a href="#"><i class="fa fa-warning text-yellow"></i> ' +event+'</a></li>')
                
                 
              });
            })
            console.log('Component mounted.')
        }
    }
</script>
