$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:3200/liste',
        type: 'GET',

        success: function (listedefoot) { // success est toujours en place, bien sûr !
            var i;
            for (i = 0; i < listedefoot.length; i++) {

                var lala = "";
                if (listedefoot.id == 1){
                    lala = pays + flag;
                    console.log(listedefoot);
                }
                $('#look').append('<h2 class="text-info mt-3">' + listedefoot[i].pays + '</h2> <p><img class="w-100" src="' + listedefoot[i].flag + '" /></p>');
            };
        },
        

        error: function (resultat, statut, erreur) {
            alert('ERROR IDRISS');
        }

    });
});

