<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KENY - Drum and Bass</title>
    <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
    <style>
        body {
            background-color: black;
            color: white;
            font-family: 'Russo One', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
        }
        .animated-text {
            font-size: 5rem;
            animation: noise 0.5s linear infinite;
        }
        @keyframes noise {
            0%, 100% { text-shadow: 2px 2px 4px #fff, -2px -2px 4px #fff; }
            25% { text-shadow: 4px 4px 6px #fff, -4px -4px 6px #fff; }
            50% { text-shadow: 6px 6px 8px #fff, -6px -6px 8px #fff; }
            75% { text-shadow: 8px 8px 10px #fff, -8px -8px 10px #fff; }
        }
    </style>
</head>
<body>
    <div class="animated-text">KENY</div>
</body>
</html>
