function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
}

Plotly.d3.csv('assets/js/timeline.csv', function(err, rows){
    var data = [{
        type: 'scatter',
        mode: 'lines',
        name: 'Confirmed cases',
        x: unpack(rows, 'date'),
        y: unpack(rows, 'confirmed')
    },{
        type: 'scatter',
        mode: 'lines',
        name: 'Interest in "Mask"',
        x: unpack(rows, 'date'),
        y: unpack(rows, 'mask')
    },{
        type: 'scatter',
        mode: 'lines',
        name: 'Interest in "Quarantine"',
        x: unpack(rows, 'date'),
        y: unpack(rows, 'quarantine')
    },{
        type: 'scatter',
        mode: 'lines',
        name: 'Interest in "Symptom"',
        x: unpack(rows, 'date'),
        y: unpack(rows, 'symptom')
    },{
        type: 'scatter',
        mode: 'lines',
        name: 'Interest in "Donald Trump"',
        x: unpack(rows, 'date'),
        y: unpack(rows, 'trump')
    }];

    Plotly.newPlot("graph1", data);
});

Plotly.d3.csv('assets/js/map.csv', function(err, rows){
    var data = [{
        type: 'scattergeo',
        mode: 'markers',
        text: unpack(rows, 'country'),
        lat: unpack(rows, 'lat'),
        lon: unpack(rows, 'long'),
        marker: {
            size: unpack(rows, 'normalized confirmed'),
            color: unpack(rows, 'symptom'),
            colorscale: 'Reds',
            colorbar: {
                title: 'Interest in "Symptom"'
            },
            line: {
                color: 'black'
            }
        }
    }];

    var layout = {
        title: '',
        geo: {
            projection: {
                type: 'mercator'
            },
            showland: true,
            landcolor: 'rgb(217, 217, 217)',
            subunitwidth: 1,
            countrywidth: 1,
            subunitcolor: 'rgb(255,255,255)',
            countrycolor: 'rgb(255,255,255)'
        },
        margin: {
            l: 30,
            r: 30,
            b: 30,
            t: 30,
            pad: 4
        }
    };

    Plotly.newPlot("graph2", data, layout, {showLink: false});
});


