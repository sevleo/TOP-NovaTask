import './styles.css';

const ModuleName = (function() { 
    const privateVar = "some private var";
    const publicVar = "some public var";
    return {publicVar};
})();