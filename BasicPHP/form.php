<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Register</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="bulma-0.7.2/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="jquery-3.3.1.min.js"></script>
    <script src="myscript.js"></script>
</head>
<body>
    <div class="container">
        <form name="myform" action="form.php" class="form" method="POST">
        
        </form>
        <label for="" class="label"> Personnal Detail</label>
        <hr>
        <div class="field">
            <strong> Name </strong><?php echo $_POST["name"]; ?><br>
        </div>
        <div class="field">
            <strong> Lastname </strong><?php echo $_POST["last_name"]; ?><br>
        </div>
        <div class="field">
            <strong> Gender </strong><?php echo $_POST["gender"]; ?><br>
        </div>
        <div class="field">
            <strong> Origin </strong><?php echo $_POST["username"]; ?><br>
        </div>
        <div class="field">
            <strong> Main Position </strong><?php echo $_POST["position"]; ?><br>
        </div>
        <div class="field">
            <strong> Main Hero </strong><?php echo $_POST["hero"]; ?>
        </div>
    </div>
</body>
</html>