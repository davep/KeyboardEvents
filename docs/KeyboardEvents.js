function add( row, s ) {
    row.insertCell().append( document.createTextNode( s ) );
}

function handleKey( e ) {

    var row = document.getElementById( "events" ).insertRow( 1 );

    [
        e.key,
        e.keyCode,
        e.altKey,
        e.ctrlKey,
        e.metaKey,
        e.shiftKey,
        e.repeat,
        e.isComposing,
        e.location
    ].map( function ( val ) {
        add( row, val );
    } );
}
