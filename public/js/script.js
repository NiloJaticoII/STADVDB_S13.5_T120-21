$(document).ready(function(){

    function validate(){
        var textbox = $('#query');

        if(textbox.val() !==""){
            textbox.css('border','');
            return true;
        }
        else {
            textbox.css('border','2px solid #fd3c3c');
            return false;
        }

    };

    $('#submit').on('click',() =>{
        console.log('click');

        const query = $('#query').val();
        if(validate()){
            document.getElementById('rTables').innerHTML = '<tr class = "table-header"></tr>';

            const modal = $('#mymodal');
            modal.modal('toggle');

            $.ajax({
                type:"POST",
                url: "/investigate",
                data:{ query },
                success: (response) =>{
                    const tableName = $('.table-name');
                    const tableElement = $('.table-element');
                    if (response.results.length > 1) {
                        //generate table header
                        response.names.forEach(name => {
                            tableName.append("<th>" + name + "</th>");
                        });
                        //generate row by row results
                        response.results.forEach(result => {
                            var row = document.createElement('tr');
                            response.names.forEach(name => {
                                let data = document.createElement('td');
                                data.innerHTML = result[name];
                                row.appendChild(data);

                                tableElement.append(row);
                            });
                        });

                    } else { //no results
                        tableElement.append("<td>sad wala tayong nahanap</td>");
                    }
                }
            });
        }
        return false;
    });
});