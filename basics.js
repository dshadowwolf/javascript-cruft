function getElement( elName ) {
    if( document.getElementById ) {
	return document.getElementById( elName );
    } else if( document.all ) {
	return document.all.item(elName);
    } else {
	throw "I Have No Method To Work With";
    }
}

function addEvent( evName, evFunc, evElem, bubble ) {
    if( evElem ) {
	var el = getElement( evElem );
	if( el.addEventHandler ) {
	    el.addEventHandler( evName, evFunc, bubble );
	} else if( el.attachEvent ) {
	    el.attachEvent( evName, evFunc );
	} else {
	    eval( el + "." + evName ) = evFunc;
	}
    } else {
	if( document.addEventHandler ) {
	    document.addEventHandler( evName, evFunc, bubble );
	} else if( document.attachEvent ) {
	    document.attachEvent( evName, evFunc );
	} else {
	    eval( document + "." + evName ) = evFunc;
	}
    }
}

