/* eslint-disable */
// In a separate file becuse graph states are so large
const states = [
  {"version":8,"graph":{"viewport":{"xmin":-10,"ymin":-11.06880404575777,"xmax":10,"ymax":11.06880404575777}},"randomSeed":"90394d4b04128d521c0e7ba07c96ceed","expressions":{"list":[{"type":"expression","id":"4","color":"#000000","latex":"@3pos=\\left(1,2,5\\right)"},{"type":"expression","id":"1","color":"#c74440","latex":"@3PerspectiveCamera\\left(pos\\right)"}]}},
  {"version":8,"graph":{"viewport":{"xmin":-10,"ymin":-6.887724846327824,"xmax":10,"ymax":6.887724846327824}},"randomSeed":"f1e10c7d0c7eefb0f00cfb77c73f134d","expressions":{"list":[{"type":"expression","id":"1","color":"#c74440","latex":"y=x^{2}"},{"type":"expression","id":"3","color":"#388c46","latex":"3x+1"},{"type":"text","id":"5","text":"@3 a=hello"}]}},
  {"version":8,"graph":{"viewport":{"xmin":-10,"ymin":-6.575573822587112,"xmax":10,"ymax":6.575573822587112}},"randomSeed":"90394d4b04128d521c0e7ba07c96ceed","expressions":{"list":[{"type":"expression","id":"1","color":"#c74440","latex":"@3PerspectiveCamera\\left(\\left(1,2,5\\right)\\right)"},{"type":"expression","id":"73","color":"#c74440","latex":"@3Show\\left(Mesh\\left(\\operatorname{Box}\\left(1,1,1\\right),\\operatorname{NormalMaterial}\\left(\\right)\\right)\\right)"}]}},
  {"version":8,"graph":{"viewport":{"xmin":-10,"ymin":-15.497381799962069,"xmax":10,"ymax":15.497381799962069}},"randomSeed":"90394d4b04128d521c0e7ba07c96ceed","expressions":{"list":[{"type":"expression","id":"1","color":"#c74440","latex":"@3PerspectiveCamera\\left(\\left(1,2,5\\right)\\right)"},{"type":"expression","id":"53","color":"#388c46","latex":"@3cubeGeometry=\\operatorname{Box}\\left(1,1,1\\right)"},{"type":"expression","id":"54","color":"#6042a6","latex":"@3material=\\operatorname{NormalMaterial}\\left(\\right)"},{"type":"expression","id":"55","color":"#c74440","latex":"@3mesh=\\operatorname{Mesh}\\left(cubeGeometry,material\\right)"},{"type":"expression","id":"69","color":"#000000","latex":"x_{0}=0"},{"type":"expression","id":"70","color":"#2d70b3","latex":"y_{0}=0"},{"type":"expression","id":"71","color":"#388c46","latex":"z_{0}=0"},{"type":"expression","id":"72","color":"#6042a6","latex":"@3meshp=Position\\left(mesh,\\ \\left(x_{0},y_{0},z_{0}\\right)\\right)"}]}},
  {"version":8,"graph":{"viewport":{"xmin":-10,"ymin":-6.575573822587112,"xmax":10,"ymax":6.575573822587112}},"randomSeed":"90394d4b04128d521c0e7ba07c96ceed","expressions":{"list":[{"type":"expression","id":"91","color":"#000000","latex":"r_{c}=4.5","slider":{"hardMin":true,"hardMax":true,"min":"1"}},{"type":"expression","id":"92","color":"#2d70b3","latex":"\\theta_{c}=4.3","slider":{"hardMin":true,"hardMax":true,"min":"-10\\pi","max":"10\\pi"}},{"type":"expression","id":"93","color":"#388c46","latex":"\\phi_{c}=0.36","slider":{"hardMin":true,"hardMax":true,"min":"-\\frac{\\pi}{2}","max":"\\frac{\\pi}{2}"}},{"type":"expression","id":"100","color":"#000000","latex":"@3pos=\\left(r_{c}\\cos\\left(\\phi_{c}\\right)\\cos\\left(\\theta_{c}\\right),\\ r_{c}\\sin\\left(\\phi_{c}\\right),\\ r_{c}\\cos\\left(\\phi_{c}\\right)\\sin\\left(\\theta_{c}\\right)\\right)"},{"type":"expression","id":"1","color":"#c74440","latex":"@3PerspectiveCamera\\left(pos\\right)"},{"type":"expression","id":"53","color":"#388c46","latex":"@3cubeGeometry=\\operatorname{Box}\\left(1,1,1\\right)"},{"type":"expression","id":"54","color":"#6042a6","latex":"@3material=\\operatorname{NormalMaterial}\\left(\\right)"},{"type":"expression","id":"55","color":"#c74440","latex":"@3mesh=\\operatorname{Mesh}\\left(cubeGeometry,material\\right)"},{"type":"expression","id":"69","color":"#000000","latex":"x_{0}=0"},{"type":"expression","id":"70","color":"#2d70b3","latex":"y_{0}=0"},{"type":"expression","id":"71","color":"#388c46","latex":"z_{0}=0"},{"type":"expression","id":"72","color":"#6042a6","latex":"@3meshp=Position\\left(mesh,\\ \\left(x_{0},y_{0},z_{0}\\right)\\right)"},{"type":"expression","id":"56","color":"#cf5fcf","latex":"@3Show(meshp)"}]}},
  {"version":8,"graph":{"viewport":{"xmin":-10,"ymin":-6.575573822587112,"xmax":10,"ymax":6.575573822587112}},"randomSeed":"90394d4b04128d521c0e7ba07c96ceed","expressions":{"list":[{"type":"expression","id":"91","color":"#000000","latex":"r_{c}=4.5","slider":{"hardMin":true,"hardMax":true,"min":"1"}},{"type":"expression","id":"92","color":"#2d70b3","latex":"\\theta_{c}=4.06","slider":{"hardMin":true,"hardMax":true,"min":"-2\\pi","max":"2\\pi"}},{"type":"expression","id":"93","color":"#388c46","latex":"\\phi_{c}=0.45","slider":{"hardMin":true,"hardMax":true,"min":"-\\frac{\\pi}{2}","max":"\\frac{\\pi}{2}"}},{"type":"expression","id":"177","color":"#000000","latex":"@3cameraPos=\\left(r_{c}\\cos\\left(\\phi_{c}\\right)\\cos\\left(\\theta_{c}\\right),\\ r_{c}\\sin\\left(\\phi_{c}\\right),\\ r_{c}\\cos\\left(\\phi_{c}\\right)\\sin\\left(\\theta_{c}\\right)\\right)"},{"type":"expression","id":"1","color":"#c74440","latex":"@3PerspectiveCamera\\left(cameraPos\\right)"},{"type":"expression","id":"53","color":"#388c46","latex":"@3cubeGeometry=\\operatorname{Box}\\left(1,1,1\\right)"},{"type":"expression","id":"112","color":"#000000","latex":"@3material=\\operatorname{LambertMaterial}\\left(\\operatorname{RGB}\\left(10,80,180\\right)\\right)"},{"type":"expression","id":"55","color":"#c74440","latex":"@3mesh=\\operatorname{Mesh}\\left(cubeGeometry,material\\right)"},{"type":"expression","id":"56","color":"#cf5fcf","latex":"@3\\operatorname{Show}\\left(mesh\\right)"},{"type":"expression","id":"161","color":"#000000","latex":"@3Show\\left(Position\\left(PointLight\\left(1\\right),\\ \\left(x_{0},\\ y_{0},\\ z_{0}\\right)\\right)\\right)"},{"type":"expression","id":"162","color":"#2d70b3","latex":"x_{0}=-7"},{"type":"expression","id":"163","color":"#388c46","latex":"y_{0}=6"},{"type":"expression","id":"164","color":"#6042a6","latex":"z_{0}=-2"}]}},
  {"version":8,"graph":{"viewport":{"xmin":-10,"ymin":-6.575573822587112,"xmax":10,"ymax":6.575573822587112}},"randomSeed":"90394d4b04128d521c0e7ba07c96ceed","expressions":{"list":[{"type":"expression","id":"91","color":"#000000","latex":"r_{c}=4.5","slider":{"hardMin":true,"hardMax":true,"min":"1"}},{"type":"expression","id":"92","color":"#2d70b3","latex":"\\theta_{c}=1.75","slider":{"hardMin":true,"hardMax":true,"min":"-2\\pi","max":"2\\pi"}},{"type":"expression","id":"93","color":"#388c46","latex":"\\phi_{c}=0.45","slider":{"hardMin":true,"hardMax":true,"min":"-\\frac{\\pi}{2}","max":"\\frac{\\pi}{2}"}},{"type":"expression","id":"177","color":"#000000","latex":"@3cameraPos=\\left(r_{c}\\cos\\left(\\phi_{c}\\right)\\cos\\left(\\theta_{c}\\right),\\ r_{c}\\sin\\left(\\phi_{c}\\right),\\ r_{c}\\cos\\left(\\phi_{c}\\right)\\sin\\left(\\theta_{c}\\right)\\right)"},{"type":"expression","id":"1","color":"#c74440","latex":"@3PerspectiveCamera\\left(cameraPos\\right)"},{"type":"expression","id":"53","color":"#388c46","latex":"@3cubeGeometry=\\operatorname{Box}\\left(1,1,1\\right)"},{"type":"expression","id":"112","color":"#000000","latex":"@3material=\\operatorname{LambertMaterial}\\left(\\operatorname{RGB}\\left(10,80,180\\right)\\right)"},{"type":"expression","id":"55","color":"#c74440","latex":"@3mesh=\\operatorname{Mesh}\\left(cubeGeometry,material\\right)"},{"type":"expression","id":"56","color":"#cf5fcf","latex":"@3\\operatorname{Show}\\left(mesh\\right)"},{"type":"expression","id":"161","color":"#000000","latex":"@3Show\\left(Position\\left(PointLight\\left(1\\right),\\ \\left(x_{0},\\ y_{0},\\ z_{0}\\right)\\right)\\right)"},{"type":"expression","id":"162","color":"#2d70b3","latex":"x_{0}=-7"},{"type":"expression","id":"163","color":"#388c46","latex":"y_{0}=6"},{"type":"expression","id":"164","color":"#6042a6","latex":"z_{0}=-2"}]}},
  {"version":8,"graph":{"viewport":{"xmin":-10,"ymin":-6.575573822587112,"xmax":10,"ymax":6.575573822587112}},"randomSeed":"90394d4b04128d521c0e7ba07c96ceed","expressions":{"list":[{"type":"expression","id":"91","color":"#000000","latex":"r_{c}=4.5","slider":{"hardMin":true,"hardMax":true,"min":"1"}},{"type":"expression","id":"92","color":"#2d70b3","latex":"\\theta_{c}=1.74","slider":{"hardMin":true,"hardMax":true,"min":"-2\\pi","max":"2\\pi"}},{"type":"expression","id":"93","color":"#388c46","latex":"\\phi_{c}=0.45","slider":{"hardMin":true,"hardMax":true,"min":"-\\frac{\\pi}{2}","max":"\\frac{\\pi}{2}"}},{"type":"expression","id":"177","color":"#000000","latex":"@3cameraPos=\\left(r_{c}\\cos\\left(\\phi_{c}\\right)\\cos\\left(\\theta_{c}\\right),\\ r_{c}\\sin\\left(\\phi_{c}\\right),\\ r_{c}\\cos\\left(\\phi_{c}\\right)\\sin\\left(\\theta_{c}\\right)\\right)"},{"type":"expression","id":"1","color":"#c74440","latex":"@3PerspectiveCamera\\left(cameraPos\\right)"},{"type":"expression","id":"53","color":"#388c46","latex":"@3cubeGeometry=\\operatorname{Box}\\left(1,1,1\\right)"},{"type":"expression","id":"112","color":"#000000","latex":"@3material=\\operatorname{LambertMaterial}\\left(\\operatorname{RGB}\\left(10,80,180\\right)\\right)"},{"type":"expression","id":"55","color":"#c74440","latex":"@3mesh=\\operatorname{Mesh}\\left(cubeGeometry,material\\right)"},{"type":"expression","id":"56","color":"#cf5fcf","latex":"@3\\operatorname{Show}\\left(mesh\\right)"},{"type":"expression","id":"161","color":"#000000","latex":"@3Show\\left(Position\\left(PointLight\\left(1\\right),\\ \\left(x_{0},\\ y_{0},\\ z_{0}\\right)\\right)\\right)"},{"type":"expression","id":"204","color":"#000000","latex":"@3Show\\left(AmbientLight\\left(0.3\\right)\\right)"},{"type":"expression","id":"162","color":"#2d70b3","latex":"x_{0}=-7"},{"type":"expression","id":"163","color":"#388c46","latex":"y_{0}=6"},{"type":"expression","id":"164","color":"#6042a6","latex":"z_{0}=-2"}]}},
  {"version":8,"graph":{"viewport":{"xmin":-12.646209858672975,"ymin":-10.001914088795278,"xmax":17.926403693539747,"ymax":10.101333647404914}},"randomSeed":"90394d4b04128d521c0e7ba07c96ceed","expressions":{"list":[{"type":"expression","id":"91","color":"#000000","latex":"r_{c}=19.1","slider":{"hardMin":true,"hardMax":true,"min":"1","max":"20"}},{"type":"expression","id":"92","color":"#2d70b3","latex":"\\theta_{c}=-0.87","slider":{"hardMin":true,"hardMax":true,"min":"-2\\pi","max":"2\\pi"}},{"type":"expression","id":"93","color":"#388c46","latex":"\\phi_{c}=0.46","slider":{"hardMin":true,"hardMax":true,"min":"-\\frac{\\pi}{2}","max":"\\frac{\\pi}{2}"}},{"type":"expression","id":"1","color":"#c74440","latex":"@3PerspectiveCamera\\left(\\left(r_{c}\\cos\\left(\\phi_{c}\\right)\\cos\\left(\\theta_{c}\\right),\\ r_{c}\\sin\\left(\\phi_{c}\\right),\\ r_{c}\\cos\\left(\\phi_{c}\\right)\\sin\\left(\\theta_{c}\\right)\\right)\\right)"},{"type":"expression","id":"53","color":"#388c46","latex":"@3geometry=\\operatorname{Sphere}\\left(1\\right)"},{"type":"expression","id":"112","color":"#000000","latex":"@3material=\\operatorname{LambertMaterial}\\left(\\operatorname{RGB}\\left(10,80,180\\right)\\right)"},{"type":"expression","id":"55","color":"#c74440","latex":"@3mesh=Mesh\\left(geometry,material\\right)"},{"type":"expression","id":"399","color":"#2d70b3","latex":"L_{x}=\\left[-10,\\ -5,\\ ...\\ ,10\\right]"},{"type":"expression","id":"228","color":"#000000","latex":"@3meshp=Position\\left(mesh,\\ \\left(L_{x},\\ 0.05L_{x}^{2},\\ 0\\right)\\right)"},{"type":"expression","id":"56","color":"#cf5fcf","latex":"@3Show(meshp)"},{"type":"expression","id":"161","color":"#000000","latex":"@3Show\\left(Position\\left(PointLight\\left(1\\right),\\ \\left(5,\\ 2,\\ -6\\right)\\right)\\right)"},{"type":"expression","id":"191","color":"#000000","latex":"@3Show\\left(AmbientLight\\left(0.2\\right)\\right)"}]}},
  {"version":8,"graph":{"viewport":{"xmin":-12.646209858672975,"ymin":-10.74191085881173,"xmax":17.926403693539747,"ymax":10.841330417421366}},"randomSeed":"90394d4b04128d521c0e7ba07c96ceed","expressions":{"list":[{"type":"expression","id":"91","color":"#000000","latex":"r_{c}=19.1","slider":{"hardMin":true,"hardMax":true,"min":"1","max":"20"}},{"type":"expression","id":"92","color":"#2d70b3","latex":"\\theta_{c}=-1.3","slider":{"hardMin":true,"hardMax":true,"min":"-2\\pi","max":"2\\pi"}},{"type":"expression","id":"93","color":"#388c46","latex":"\\phi_{c}=0.31","slider":{"hardMin":true,"hardMax":true,"min":"-\\frac{\\pi}{2}","max":"\\frac{\\pi}{2}"}},{"type":"expression","id":"1","color":"#c74440","latex":"@3PerspectiveCamera\\left(\\left(r_{c}\\cos\\left(\\phi_{c}\\right)\\cos\\left(\\theta_{c}\\right),\\ r_{c}\\sin\\left(\\phi_{c}\\right),\\ r_{c}\\cos\\left(\\phi_{c}\\right)\\sin\\left(\\theta_{c}\\right)\\right)\\right)"},{"type":"expression","id":"53","color":"#388c46","latex":"@3geometry=\\operatorname{Sphere}\\left(0.02L_{x}^{2}+0.5\\right)"},{"type":"expression","id":"112","color":"#000000","latex":"@3material=\\operatorname{PhongMaterial}\\left(\\operatorname{RGB}\\left(10,80,180\\right)\\right)"},{"type":"expression","id":"55","color":"#c74440","latex":"@3mesh=Mesh\\left(geometry,material\\right)"},{"type":"expression","id":"399","color":"#2d70b3","latex":"L_{x}=\\left[-12.5,\\ -7.5,\\ ...\\ ,12.5\\right]"},{"type":"expression","id":"228","color":"#000000","latex":"@3meshp=Position\\left(mesh,\\ \\left(L_{x},\\ 0.02L_{x}^{2},\\ 0\\right)\\right)"},{"type":"expression","id":"56","color":"#cf5fcf","latex":"@3Show(meshp)"},{"type":"expression","id":"161","color":"#000000","latex":"@3Show\\left(Position\\left(PointLight\\left(1\\right),\\ \\left(5,\\ 2,\\ -6\\right)\\right)\\right)"},{"type":"expression","id":"191","color":"#000000","latex":"@3Show\\left(AmbientLight\\left(0.2\\right)\\right)"}]}},
  {"version":8,"graph":{"viewport":{"xmin":0.7057410612924646,"ymin":-2.2744264081376606,"xmax":1.0401650157133804,"ymax":-2.045992148650895}},"randomSeed":"61007c29a47db55a70472ad6e2f2a233","expressions":{"list":[{"type":"expression","id":"169","color":"#000000","latex":"\\theta_{cam}=0.4t","slider":{"hardMin":true,"hardMax":true,"loopMode":"LOOP_FORWARD","min":"0","max":"2\\pi"}},{"type":"expression","id":"170","color":"#2d70b3","latex":"r_{cam}=18.5","slider":{"hardMin":true,"hardMax":true,"playDirection":-1,"min":"1","max":"20"}},{"type":"expression","id":"358","color":"#000000","latex":"n=4","slider":{"hardMin":true,"hardMax":true,"min":"1","step":"1"}},{"type":"expression","id":"324","color":"#2d70b3","latex":"@3s=PerspectiveCamera\\left(\\left(r_{cam}\\cos\\left(\\theta_{cam}\\right),\\ 2,\\ r_{cam}\\sin\\left(\\theta_{cam}\\right)\\right)\\right)"},{"type":"expression","id":"350","color":"#000000","latex":"@3geo=\\operatorname{Box}\\left(10,1,10\\right)"},{"type":"expression","id":"568","color":"#2d70b3","latex":"t=0.06","slider":{"animationPeriod":8000,"loopMode":"PLAY_INDEFINITELY","isPlaying":true,"max":"83.282"}},{"type":"expression","id":"603","color":"#000000","latex":"s_{moothstep}\\left(t_{0}\\right)=3t_{0}^{2}-2t_{0}^{3}"},{"type":"expression","id":"388","color":"#45c4c4","latex":"B_{y}=\\left(0.8+s_{moothstep}\\left(1-\\left|1-\\operatorname{mod}\\left(t,2\\right)\\right|\\right)\\right)\\cdot\\left(\\left[-n...n\\right]\\right)"},{"type":"expression","id":"411","color":"#000000","latex":"@3blue=\\operatorname{RGB}\\left(10,\\ 80,\\ 140\\right)"},{"type":"expression","id":"400","color":"#000000","latex":"@3mesh=Mesh\\left(geo,\\ \\operatorname{LambertMaterial}\\left(blue\\right)\\right)"},{"type":"expression","id":"334","color":"#2d70b3","latex":"@3Show\\left(Position\\left(mesh,\\ \\left(0,\\ B_{y},\\ 0\\right)\\right)\\right)"},{"type":"expression","id":"369","color":"#000000","latex":"@3light=Position\\left(PointLight\\left(1,\\ white\\right),\\ \\left(5,\\ 2,\\ -5\\right)\\right)"},{"type":"expression","id":"514","color":"#000000","latex":"@3Show\\left(light\\right)"},{"type":"expression","id":"479","color":"#2d70b3","latex":"@3Show\\left(AmbientLight\\left(0.5,\\ white\\right)\\right)"}]}},
  {"version":8,"graph":{"viewport":{"xmin":-10,"ymin":-12.774011020708102,"xmax":10,"ymax":12.774011020708102}},"randomSeed":"90394d4b04128d521c0e7ba07c96ceed","expressions":{"list":[{"type":"expression","id":"91","color":"#000000","latex":"r_{c}=10","slider":{"hardMin":true,"hardMax":true,"min":"1"}},{"type":"expression","id":"92","color":"#2d70b3","latex":"\\theta_{c}=4.3","slider":{"hardMin":true,"hardMax":true,"min":"-10\\pi","max":"10\\pi"}},{"type":"expression","id":"93","color":"#388c46","latex":"\\phi_{c}=0.67","slider":{"hardMin":true,"hardMax":true,"min":"-\\frac{\\pi}{2}","max":"\\frac{\\pi}{2}"}},{"type":"expression","id":"100","color":"#000000","latex":"@3pos=\\left(r_{c}\\cos\\left(\\phi_{c}\\right)\\cos\\left(\\theta_{c}\\right),\\ r_{c}\\sin\\left(\\phi_{c}\\right),\\ r_{c}\\cos\\left(\\phi_{c}\\right)\\sin\\left(\\theta_{c}\\right)\\right)"},{"type":"expression","id":"1","color":"#c74440","latex":"@3PerspectiveCamera\\left(pos\\right)"},{"type":"expression","id":"658","color":"#000000","latex":"@3mat=\\operatorname{NormalMaterial}\\left(\\right)"},{"type":"expression","id":"56","color":"#cf5fcf","latex":"@3Show\\left(Mesh\\left(\\operatorname{Icosahedron}\\left(1\\right),\\ mat,\\ \\left(-1,5,0\\right)\\right)\\right)"},{"type":"expression","id":"699","color":"#2d70b3","latex":"@3Show\\left(Mesh\\left(\\operatorname{Dodecahedron}\\left(1\\right),\\ mat,\\ \\left(-1,3,0\\right)\\right)\\right)"},{"type":"expression","id":"740","color":"#2d70b3","latex":"@3Show\\left(Mesh\\left(Octahedron\\left(1\\right),\\ mat,\\ \\left(-1,1,0\\right)\\right)\\right)"},{"type":"expression","id":"871","color":"#2d70b3","latex":"@3Show\\left(Mesh\\left(\\operatorname{Tetrahedron}\\left(1\\right),\\ mat,\\ \\left(-1,-1,0\\right)\\right)\\right)"},{"type":"expression","id":"862","color":"#2d70b3","latex":"@3Show\\left(Mesh\\left(\\operatorname{Sphere}\\left(0.8\\right),\\ mat,\\ \\left(-1,-3,0\\right)\\right)\\right)"},{"type":"expression","id":"1046","color":"#2d70b3","latex":"@3Show\\left(Mesh\\left(Torus\\left(0.6,0.2\\right),\\ mat,\\ \\left(1,5,0\\right)\\right)\\right)"},{"type":"expression","id":"1519","color":"#2d70b3","latex":"@3Show\\left(Mesh\\left(\\operatorname{TorusKnot}\\left(0.6,0.2\\right),\\ mat,\\ \\left(1,3,0\\right)\\right)\\right)"},{"type":"expression","id":"1508","color":"#2d70b3","latex":"@3Show\\left(Mesh\\left(\\operatorname{Box}\\left(1,1,1\\right),\\ mat,\\ \\left(1,1,0\\right)\\right)\\right)"},{"type":"expression","id":"1497","color":"#2d70b3","latex":"@3Show\\left(Mesh\\left(\\operatorname{Cone}\\left(0.5,1.2\\right),\\ mat,\\ \\left(1,-1,0\\right)\\right)\\right)"},{"type":"expression","id":"1486","color":"#2d70b3","latex":"@3Show\\left(Mesh\\left(\\operatorname{Frustum}\\left(0.3,0.8,1\\right),\\ mat,\\ \\left(1,-3,0\\right)\\right)\\right)"},{"type":"expression","id":"1475","color":"#2d70b3","latex":"@3Show\\left(Mesh\\left(\\operatorname{Cylinder}\\left(0.4,1\\right),\\ mat,\\ \\left(1,-5,0\\right)\\right)\\right)"}]}},
  {"version":8,"graph":{"viewport":{"xmin":-10,"ymin":-12.774011020708102,"xmax":10,"ymax":12.774011020708102}},"randomSeed":"90394d4b04128d521c0e7ba07c96ceed","expressions":{"list":[{"type":"expression","id":"91","color":"#000000","latex":"r_{c}=6.02","slider":{"hardMin":true,"hardMax":true,"min":"1"}},{"type":"expression","id":"92","color":"#2d70b3","latex":"\\theta_{c}=2.6","slider":{"hardMin":true,"hardMax":true,"min":"-10\\pi","max":"10\\pi"}},{"type":"expression","id":"93","color":"#388c46","latex":"\\phi_{c}=-1.21","slider":{"hardMin":true,"hardMax":true,"min":"-\\frac{\\pi}{2}","max":"\\frac{\\pi}{2}"}},{"type":"expression","id":"100","color":"#000000","latex":"@3pos=\\left(r_{c}\\cos\\left(\\phi_{c}\\right)\\cos\\left(\\theta_{c}\\right),\\ r_{c}\\sin\\left(\\phi_{c}\\right),\\ r_{c}\\cos\\left(\\phi_{c}\\right)\\sin\\left(\\theta_{c}\\right)\\right)"},{"type":"expression","id":"1","color":"#c74440","latex":"@3PerspectiveCamera\\left(pos\\right)"},{"type":"expression","id":"2712","color":"#cf5fcf","latex":"@3blue=\\operatorname{RGB}\\left(10,80,180\\right)"},{"type":"expression","id":"2196","color":"#6042a6","latex":"@3Show\\left(PointLight\\left(1,\\ RGB\\left(255,255,255\\right),\\left(-3,-4,1\\right)\\right)\\right)"},{"type":"expression","id":"862","color":"#2d70b3","latex":"@3Show\\left(Mesh\\left(Sphere\\left(0.8\\right),NormalMaterial\\left(\\right),\\ \\left(-1,-3,0\\right)\\right)\\right)"},{"type":"expression","id":"2211","color":"#c74440","latex":"@3Show\\left(Mesh\\left(Sphere\\left(0.8\\right),\\ \\operatorname{DepthMaterial}\\left(\\right),\\ \\left(-1,-5,0\\right)\\right)\\right)"},{"type":"expression","id":"2279","color":"#c74440","latex":"@3Show\\left(Mesh\\left(Sphere\\left(0.8\\right),\\ \\operatorname{BasicMaterial}\\left(blue\\right),\\ \\left(-1,-1,0\\right)\\right)\\right)"},{"type":"expression","id":"2270","color":"#c74440","latex":"@3Show\\left(Mesh\\left(Sphere\\left(0.8\\right),\\ \\operatorname{ToonMaterial}\\left(blue\\right),\\ \\left(-0.5,-1,1.5\\right)\\right)\\right)"},{"type":"expression","id":"2261","color":"#c74440","latex":"@3Show\\left(Mesh\\left(Sphere\\left(0.8\\right),\\ \\operatorname{PhongMaterial}\\left(blue\\right),\\ \\left(-0.5,-3,1.5\\right)\\right)\\right)"},{"type":"expression","id":"2252","color":"#c74440","latex":"@3Show\\left(Mesh\\left(Sphere\\left(0.8\\right),\\ \\operatorname{LambertMaterial}\\left(blue\\right),\\ \\left(-0.5,-5,1.5\\right)\\right)\\right)"}]}},
]
export default states
