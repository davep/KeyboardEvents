function add( row, s ) {
    row.insertCell().append( document.createTextNode( s ) );
}

function emojibool( b ) {
    return b ? "✅" : "❌";
}

function handleKey( e ) {

    var row = document.getElementById( "events" ).insertRow( 1 );

    [
        e.key,
        e.keyCode,
        emojibool( e.altKey ),
        emojibool( e.ctrlKey ),
        emojibool( e.metaKey ),
        emojibool( e.shiftKey ),
        e.repeat,
        emojibool( e.isComposing ),
        e.location
    ].map( function ( val ) {
        add( row, val );
    } );
}
