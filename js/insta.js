$(document).ready(function(){
    
    var userFeed = new Instafeed({
    get: 'user',
    userId: 1058017842,
    accessToken: '1058017842.1677ed0.f5a7e4a732c24d3d9567cb9b83bfdd27',
    resolution: 'standard_resolution',
    limit: '11'
});
  userFeed.run();

});