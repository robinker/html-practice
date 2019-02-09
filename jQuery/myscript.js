$(document).ready(function() {
    var list;
    var tmpArr = [];
    $('#search-btn').click(function() {
        $('td').remove();
        var count = 1;
        console.log($('#search-input').val());
        list.forEach(element => {
            $.each(element, function(key, value) {
                if((value.toLowerCase()).includes($('#search-input').val().toLowerCase())){
                    tmpArr.push(element)
                    return false;
                }
            });
        });
        createTable(tmpArr);
    });

    $('#advance-show-btn').click(function() {
        $('#simple-search').hide();
        $('#advanced-search').show();
    });

    $('#simple-show-btn').click(function() {
        $('#simple-search').show();
        $('#advanced-search').hide();
    });

    function createTable(array){
        var html = '';
        var count = 1;
        array.forEach(obj => {
            html += '<tr>';
            html += '<td>'+ count++ +'</td>';
            $.each(obj, function(key, value) {
                html += '<td>' + value + '</td>';
            });
            html += '</tr>';
        })
        $('#body').append(html);
        // clear array for next search
        tmpArr = [];
    }

    $('#search-input').keypress(function (e){
        if (e.which == 13){
            if($('#search-input').val() != ''){
                $('#search-btn').click();
            }
            else {
                $('td').remove();
                showData();
            }
        } 
    });

    // $('#search-name, #search-hair, #search-skin, #search-eye').keypress(function (e){
    //     if (e.which == 13){
    //         if($('#search-input').val() != ''){
    //             $('#advance-search-btn').click();
    //         }
    //     } 
    // })

    $('#advance-search-btn').click(function(){
        $('td').remove();
        searchByName($('#search-name').val());
        searchByHeight($("#search-height option:selected").val());
        searchByMass($("#search-mass option:selected").val());
        searchByHair($('#search-hair').val());
        searchBySkin($('#search-skin').val());
        searchByEye($('#search-eye').val());
        searchByGender($('#search-gender option:selected').val());
        summary(tmpArr, $('#search-name').val(), $("#search-height option:selected").val(), $("#search-mass option:selected").val()
        , $('#search-hair').val(), $('#search-skin').val(), $('#search-eye').val(), $('#search-gender option:selected').val());
        createTable(tmpArr);
    });

    function searchByName(name){
        if (name != ''){
            list.forEach(element => {
                if(((element.name).toLowerCase()).includes(name.toLowerCase())){
                    console.log(element.name);
                    if(jQuery.inArray(element, tmpArr) == -1){
                        tmpArr.push(element);
                    }
                }
            });
        }
    }

    function searchByHeight(height){
        console.log(height);
        if (height != ''){
            list.forEach(element => {
                if (height == 99){
                    if(parseInt(element.height) <= height){
                        if(jQuery.inArray(element, tmpArr) == -1){
                            tmpArr.push(element);
                        }
                    }
                }

                else if(height == 199){
                    if(parseInt(element.height) > 99 && parseInt(element.height) < height){
                        if(jQuery.inArray(element, tmpArr) == -1){
                            tmpArr.push(element);
                        }
                    }
                }

                else if(height == 200){
                    if(parseInt(element.height) > height){
                        if(jQuery.inArray(element, tmpArr) == -1){
                            tmpArr.push(element);
                        }
                    }
                }
                
            });
        }
    }

    function searchByMass(mass){
        if (mass != ''){
            list.forEach(element => {
                if(mass == 99){
                    if(parseInt(element.mass) <= mass){
                        if(jQuery.inArray(element, tmpArr) == -1){
                            tmpArr.push(element);
                        }
                    }
                }

                else if(mass == 100){
                    if(parseInt(element.mass) > mass){
                        if(jQuery.inArray(element, tmpArr) == -1){
                            tmpArr.push(element);
                        }
                        
                    }
                }
                
            });
        }
    }

    function searchByHair(color) {      
        if (color != ''){
            list.forEach(element => {
                if(((element.hair_color).toLowerCase()).includes(color)){
                    if(jQuery.inArray(element, tmpArr) == -1){
                        tmpArr.push(element);
                    }
                }
            });
        }
    }

    function searchBySkin(color) {       
        if (color != ''){
            list.forEach(element => {
                if(((element.skin_color).toLowerCase()).includes(color)){
                    if(jQuery.inArray(element, tmpArr) == -1){
                        tmpArr.push(element);
                    }
                }
            });
        }
    }

    function searchByEye(color) {       
        if (color != ''){
            list.forEach(element => {
                if(((element.eye_color).toLowerCase()).includes(color)){
                    if(jQuery.inArray(element, tmpArr) == -1){
                        tmpArr.push(element);
                    }
                }
            });
        }
    }

    function searchByGender(gender){
        list.forEach(element => {
            if (gender == "all"){
                console.log("ALLLLLL");
                tmpArr.push(element);
                
            }
            else if((element.gender).toLowerCase() == gender.toLowerCase()){
                if(jQuery.inArray(element, tmpArr) == -1){
                    tmpArr.push(element);
                }
            }
        });
    }

    function summary(array, name, height, mass, hairColor, skinColor, eyeColor, gender){
        console.log(eyeColor);
        // remove from last to first to prevent bugs
            if (name != ''){
                for(var i = array.length -1 ; i > -1 ; i--){
                    if(((array[i].name).toLowerCase()).includes(name.toLowerCase())){
                        // console.log(tmpArr[i].name);
                    }
                    else {
                        array.splice(i,1);
                    }
                }
                
            }

            if (height != 'all'){
                for(var i = array.length -1 ; i > -1 ; i--){
                    if (height == 99){
                        if(parseInt(array[i].height) <= height){
                            
                        }
                        else {
                            array.splice(i,1);
                        }
                    }

                    else if(height == 199){
                        if(parseInt(array[i].height) > 99 && parseInt(array[i].height) < height){
                            
                        }
                        else {
                            array.splice(i,1);
                        }
                    }

                    else if(height == 200){
                        if(parseInt(array[i].height) > height){
                            
                        }
                        else {
                            array.splice(i,1);
                        }
                    }
                }  
            }
            
            if (mass != 'all'){
                for(var i = array.length -1 ; i > -1 ; i--){
                    if(mass == 99){
                        console.log("MASssssssssssss 99 = " + array[i].mass);
                        if(parseInt(array[i].mass) <= mass){

                        }
                        else {
                            array.splice(i,1);
                        }

                    }
                    else if(mass == 100){
                        console.log("MASssssssssssss 100")
                        if(parseInt(array[i].mass) > mass){
                            
                        }
                        else {
                            console.log("MASssssssssssss POP")

                            array.splice(i,1);
                        }
                    }
                    
                }
            }

            if (hairColor != ''){
                for(var i = array.length -1 ; i > -1 ; i--){
                    if(((array[i].hair_color).toLowerCase()).includes(hairColor)){
                        
                    }
                    else {
                        array.splice(i,1);
                    }
                }
            }

            if (skinColor != ''){
                for(var i = array.length -1 ; i > -1 ; i--){
                    if(((array[i].skin_color).toLowerCase()).includes(skinColor)){
                        
                    }
                    else {
                        array.splice(i,1);
                    }
                }
            }

            if (eyeColor != ''){
                for(var i = array.length -1 ; i > -1 ; i--){
                    if(((array[i].eye_color).toLowerCase()).includes(eyeColor)){
                        
                    }
                    else {
                        array.splice(i,1);
                    }
                }
            }

            if (gender != 'all'){
                for(var i = array.length -1 ; i > -1 ; i--){
                    if((array[i].gender).toLowerCase() == gender.toLowerCase()){
                        
                    }
                    else {
                        array.splice(i,1);
                    }
                }
            }

            
    }


    function showData(){
        var html = '';
        var count = 1;
        list.forEach(element => {
            html += '<tr>';
            html += '<td>'+ count++ +'</td>';
            $.each(element, function(key, value) {
                html += '<td>' + value + '</td>';
            });
            html += '</tr>';
        })
        $('#body').append(html);
    }

    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        list = response;
        $('#advanced-search').hide();
        showData();
    });
});