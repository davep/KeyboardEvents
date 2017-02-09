function add( row, s ) {
    row.insertCell().append( document.createTextNode( s ) );
}

function emojibool( b ) {
    return b ? "✅" : "❌";
}

function describeLocation( loc ) {

    switch ( loc ) {
        case 0:
            return "Standard";
        case 1:
            return "Left";
        case 2:
            return "Right";
        case 3:
            return "Numpad";
        case 4:
            return "Mobile";
        case 5:
            return "Joystock";
    }

    return "Unknown";
};

function handleKey( e ) {

    var row = document.getElementById( "events" ).insertRow( 1 );

    [
        e.key,
        e.keyCode,
        emojibool( e.altKey ),
        emojibool( e.ctrlKey ),
        emojibool( e.metaKey ),
        emojibool( e.shiftKey ),
        emojibool( e.repeat ),
        emojibool( e.isComposing ),
        describeLocation( e.location )
    ].map( function ( val ) {
        add( row, val );
    } );
}
