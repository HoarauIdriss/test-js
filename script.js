$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:3200/liste',
        type: 'GET',

        success: function (listedefoot) { // success est toujours en place, bien sûr !
            var i;
            for (i = 0; i < listedefoot.length; i++) {

                var lala = "";
                if (listedefoot.id === 1){
                    lala = pays + flag;
                    console.log(listedefoot);
                }
                $('#look').append('<div class="jumbotron"><h2 class="text-info my-2 text-center">' + listedefoot[i].pays + '</h2> <div class="col-md-6"><p><img class="w-100" src="' + listedefoot[i].flag + '" /></p> </div> </div>');
            };
        },
        

        error: function (resultat, statut, erreur) {
            alert('ERROR IDRISS');
        }

    });
});

