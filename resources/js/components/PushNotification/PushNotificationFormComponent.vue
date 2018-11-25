<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                submitID: 'button_form', // Button ID that submit the data form
            }
        },
        mounted: function () {
            /* DECLARATIONS */
            let root = this.$root; 
            root.toastr.options = {positionClass: "toast-top-left"};
            let url = '/notification';

            $(`#${this.submitID}`).on('click', function (e) {
                $.ajax({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    type: "GET",
                    url: url,
                    data: "notification",
                    success: function (data) {
                        // console.log(data);
                        $(`.nav-tabs-main > .active`).prev('li').find('a').trigger('click');
                        root.toastr["success"](`Nova notificação!`, "Sucesso!");
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                        root.toastr["error"](`Falha em notificação`, "Error!");
                    }
                });
                e.preventDefault();
            });
            
        }
    }
</script>

<style scoped>

</style>
