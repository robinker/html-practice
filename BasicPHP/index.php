<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Survey</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="bulma-0.7.2/css/bulma.min.css">
    <link rel="stylesheet" href="/style.css">
    <script src="jquery-3.3.1.min.js"></script>
    <script src="myscript.js"></script>
    
</head>
<body>
    <div class="container">
        <form id="myform" action="form.php" class="form" method="POST">
            <div class="field">
                <label class="label">Name</label>
                <label class="warning" id="lbl_name" hidden>* Name Require</label> 
                <div class="control">
                    <input type="text" class="input is-hover" id="name" name="name">
                </div>
            </div>

            <div class="field">
                <label class="label">Last Name</label> 
                <label class="warning" id="lbl_last_name" hidden>* Last Name Require</label> 
                <div class="control">
                    <input type="text" class="input is-hover" id="last_name" name="last_name">
                </div>
            </div>

            <div class="field">
                <label><strong>Gender :</strong></label>
                <span class="gender-selection">
                    <input type="radio" name="gender" value="male" checked> Male
                    <input type="radio" name="gender" value="female"> Female
                    <input type="radio" name="gender" value="other"> Other
                </span>
            </div>

            <div class="field">
                <label class="label">Origin ID</label>
                <label class="warning" id="lbl_username" hidden>* Origin ID Require</label> 
                <div class="control">
                    <input type="text" class="input is-hover" id="username" name="username">
                </div>
            </div>
                
            <div class="field">
                <label class="label">Main Position</label>
                <div class="control">
                    <div class="select is-info">
                        <select name="position" id="position">
                            <option value="Attacker">Attacker</option>
                            <option value="Denfender">Scout</option>
                            <option value="Supporter">Supporter</option>
                        </select>
                    </div> 
                </div>
            </div>
            
            <div class="field">
                    <label class="label">Kill Score</label>
                    <label class="warning" id="lbl_kill" hidden>* Kill Score Require</label> 
                    <div class="control">
                        <input type="text" class="input is-hover" id="kill" name="kill">
                    </div>
            </div>

            <div class="field">
                <label class="label">Dead Score</label>
                    <label class="warning" id="lbl_dead" hidden>* Dead Score Require</label> 
                    <div class="control">
                        <input type="text" class="input is-hover" id="dead" name="dead">
                    </div>
            </div>

            <div class="field">
                <label class="label">Assist Score</label>
                    <label class="warning" id="lbl_dead" hidden>* Assist Score Require</label> 
                    <div class="control">
                        <input type="text" class="input is-hover" id="assist" name="assist">
                    </div>
            </div>
            <div class="field is-grouped">
                <p class="control">
                    <button class="button is-primary" id="submit-btn">Submit</button>
                </p>
                <p class="control">
                    <div class="file">
                        <label class="file-label">
                            <input class="file-input" type="file" name="csvFile">
                            <span class="file-cta">
                                <span class="file-label">
                                    Choose a file…
                                </span>
                            </span>
                        </label>
                    </div>
                </p>
            </div>

        </form>
    </div>
</body>
</html>