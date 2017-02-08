function add( row, s ) {
    row.insertCell().append( document.createTextNode( s ) );
}

function handleKey( e ) {

    var table = document.getElementById( "events" );
    var row   = table.insertRow( 1 );

    add( row, e.key );
    add( row, e.keyCode );
}
