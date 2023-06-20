#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; // 画布尺寸（宽，高）
uniform vec2 u_mouse;      // 鼠标位置（在屏幕上哪个像素）
uniform float u_time;     // 时间（加载后的秒数）

vec4 red(){
    return vec4(1.0,0.0,0.0,1.0);
}
vec4 color = vec4(vec3(1.0,0.0,1.0),1.0);

vec4 color2 = vec4(abs(cos(u_time)),0.5,0.3,1.0);



void main(){
    // gl_FragColor = red();
    // gl_FragColor = color;
    // gl_FragColor = color2;
    vec2 st = gl_FragCoord.xy/u_resolution;
    gl_FragColor = vec4(st.x,st.y,1.0,1.0);
}