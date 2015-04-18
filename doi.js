var someplace = { state: 'Massachusetts', capital: 'Boston', population: 378787 };


var doi_url = 'doisigners.json';
var doi_request = new XMLHttpRequest();
doi_request.onreadystatechange = 
    function () { 
        var complete = 4, ok = 200;
        if (doi_request.readyState == complete && doi_request.status == ok)
            console.log(doi_request.responseText);
    };
doi_request.open('GET', doi_url);
doi_request.send(null);


function showAbuses()
        {
            // There should be exactly one of these elements, but it’s still in an array:
            var abusesli = document.getElementsByClassName('abuses');

            // Test for the existence of <li> tags: if there aren’t any,
            // the getElementsByTagName will return null, and !null will be true:
            if (abusesli.length==1){    // Add the <li> tags.
                d3.select('ul').selectAll('li.abuses')
				    .data(abuses)
				    .enter().append('li')
				    .attr('class','abuses')
				    .text(String)
				    this.value = 'Hide Abuses'
			}else{
				d3.selectAll('li').remove()
				this.value = 'Show Abuses'
     	   }
        }
