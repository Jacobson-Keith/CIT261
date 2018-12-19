var studentLog = [];

(function() {
    function toJSONString( form ) {
        var obj = {};
        var elements = form.querySelectorAll( "input, select, textarea" );
        for( var i = 0; i < elements.length; ++i ) {
            var element = elements[i];
            var name = element.name;
            var value = element.value;

            if( name ) {
                obj[ name ] = value;
            }
        }

        studentLog.push(JSON.stringify(obj));
        localStorage.setItem('studentLog', studentLog);
        return JSON.stringify( obj );
    }

    document.addEventListener( "DOMContentLoaded", function() {
        var form = document.getElementById( "form" );
        var output = document.getElementById( "output" );
        form.addEventListener( "submit", function( e ) {
            e.preventDefault();
            var json = toJSONString( this );
            output.innerHTML = json;
        }, false);
    });

})();

function getData() {
    var logs = "[" + localStorage.getItem('studentLog') + "]";
    var table = document.getElementById("table");

    var objLogs = JSON.parse(logs);

    for (let i = 0; i < objLogs.length; i++) {

        var row = table.insertRow(-1);

        var date = row.insertCell(0);
        var firstname = row.insertCell(1);
        var lastname = row.insertCell(2);
        var age = row.insertCell(3);
        var enroll = row.insertCell(4);

        date.innerHTML = objLogs[i].date;
        firstname.innerHTML = objLogs[i].firstname;
        lastname.innerHTML = objLogs[i].lastname;
        age.innerHTML = objLogs[i].age;
        enroll.innerHTML = objLogs[i].enroll;
    }};

/*
Unused arrays

function Stu(firstName, lastName, age, id, email) {
	this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.id = id;
    this.email = email;
};
    
var createStudent = (function({
    var keith = new Stu("Keith", "Jacobson", 29, 0009, "jac11009@byui.edu")
    var morgane = new Stu("Morgane", "Jacobson", 25, 0010, "jac11010@byui.edu")
    var sophia = new Stu("Sophia", "Jacobson", 4, 0011, "jac11011@byui.edu")
    var oliver = new Stu("Oliver", "Jacobson", 3, 0012, "jac11012@byui.edu")
    var theo = new Stu("Theo", "Jacobson", 1, 0013, "jac11013@byui.edu")
    var lola = new Stu("Lola", "Jacobson", 0, 0014, "jac11014@byui.edu")
    var array = [keith, morgane, sophia, oliver, theo, lola];

    return{
        list: array,
        set: function set(firstName, lastName, age, id, email) {
            var id
        }
    }

}))

*/
