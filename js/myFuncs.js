var bio_table_generator = function(feature) {
    // debugger;
    if (feature) {
        bio =
            '<div class="row">\
                  <div class="col-sm-3 col-md-6">\
                  Photo\
                      <img width="200 " height="200 " src=" ' + (feature.properties['PhotoURL'] !== null ? feature.properties['PhotoURL'] : ' ') + ' "></img>\
                  </div>\
                  <div class="col-sm-3 col-md-6">\
                  Grave\
                    <img width="200 " height="200 " src=" ' + (feature.properties['Gravel_url'] !== null ? feature.properties['Gravel_url'] : ' ') + ' "></img>\
                    <a href="hassan/index.html">Request Services</a>\
                  </div>\
              </div>\
              <div class="row">\
                  <div class="col-sm-3 col-md-6">\
                      <table class="table">\
                          <tr>\
                              <td colspan="2 "><strong>Full_Name</strong><br />' + (feature.properties['Full_Name'] !== null ? Autolinker.link(String(feature.properties['Full_Name'])) : '') + '</td>\
                          </tr>\
                          <tr>\
                              <td colspan="2 ">' + (feature.properties['Titles'] !== null ? Autolinker.link(String(feature.properties['Titles'])) : '') + '</td>\
                          </tr>\
                          <tr>\
                              <th scope="row ">Birth</th>\
                              <td>' + (feature.properties['Birth'] !== null ? Autolinker.link(String(feature.properties['Birth'])) : '') + '</td>\
                          </tr>\
                          <tr>\
                              <th scope="row ">Death</th>\
                              <td>' + (feature.properties['Death'] !== null ? Autolinker.link(String(feature.properties['Death'])) : '') + '</td>\
                          </tr>\
                          <tr>\
                              <th scope="row ">More Info</th>\
                              <td>' + (feature.properties['BioURL'] !== null ? Autolinker.link(String(feature.properties['BioURL'])) : '') + '</td>\
                          </tr>\
                          <tr>\
                              <th scope="row ">Source</th>\
                              <td colspan="2 ">' + (feature.properties['Source'] !== null ? Autolinker.link(String(feature.properties['Source'])) : '') + '</td>\
                          </tr>\
                          <tr>\
                            <th>\
                            </th>\
                            <td>\
                            </td>\
                        </tr>\
                      </table>\
                  </div>\
              </div>';
    } else {
        bio = 'Move over one of the symbols';
    }
    return bio;
};

function style_Notables_1_0(feature) {
    return {
        pane: 'pane_Notables_1',
        radius: 4.0,
        opacity: 1,
        color: getColor(feature),
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(141,90,153,1.0)',
    }
}

function style_Notables_div_icon(feature) {

    var myIcon = L.divIcon({
        className: 'my-div-icon',
        html: `<span style="color: brown; font-size: 12px;
        text-shadow: -0px -0px 0px black;">${feature.properties.First_name}</span>`
    });
    var graveIcon = L.icon({
        iconUrl: 'images/grave_24px.png'
    });
    return {
        icon: graveIcon
    }
}

function getColor(feature) {
    let color = 'rgba(35,35,35,1.0)';
    const diff = new Date() - new Date(feature.properties.Death);

    if (diff > 3153600000000) {
        // debugger;
        color = 'red';
    }
    return color;
}