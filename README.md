# Furniture Website

### How to start
Run ```npm i && npm start```

### Notes

#### [ CSS ]

* If need certain value to be ```X_px``` when window's width is ```Y_px```, ```X_px + U_px``` when window's width is ```Y_px + V_px``` and so on, use ```calc(X_px + ((100vw - Y_px) / W))``` where ```W = V_px/U_px```