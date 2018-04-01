$.getJSON('https://datasource.kapsarc.org/api/records/1.0/search/?dataset=population-by-gender-age-nationality-saudinon-saudi', function(data) {
    records=data['records'];
    var total=0;
    records.forEach(function(element) {
      console.log(element);
      $( ".data" ).append( "<tr>"+
                              "<td>"+element['fields']['age_groups']+"</td>"+
                              "<td>"+element['fields']['gender']+"</td>"+
                              "<td>"+element['fields']['nationality']+"</td>"+
                              "<td>"+element['fields']['population']+"</td>"+
                              "<td>"+element['fields']['time_period']+"</td>"+
                           "</tr>" );

                           total = total + element['fields']['population'];
                        
    });
    
    $( ".total" ).append("<p>"+total+"</p>");

});