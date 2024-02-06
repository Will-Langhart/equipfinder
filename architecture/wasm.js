useEffect(() => {
  WebAssembly.instantiateStreaming(fetch('your_lua_compiled.wasm'), {})
    .then(result => {
      // Use exported functions from your Lua script
      result.instance.exports.yourLuaFunction();
    });
}, []);
