<!DOCTYPE html>
<html>

<head>
	<title>PHP login system</title>
	<!-- <link rel="stylesheet" type="text/css" href="style.css" /> -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.13.4/dist/css/uikit.min.css" />

</head>

<body>
	<?php
	include("connection.php")
	?>
	<div class="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport>

		<div class="uk-width-1-1">
			<div class="uk-container">
				<div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
					<div class="uk-width-1-1@m">
						<form action="register.php" method="POST" class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
							<ul class="uk-tab uk-flex-center" uk-grid uk-switcher="animation: uk-animation-fade">
								<li><a href="#">Registrieren</a></li>
								<li><a href="#">Einloggen</a></li>
								<li class="uk-hidden">Forgot Password?</li>
							</ul>
							<ul class="uk-switcher uk-margin">
								<li>
									<h3 class="uk-card-title uk-text-center">Möchtest du dich neu anmelden?</h3>
									<form>
										<div class="uk-margin">
											<div class="uk-inline uk-width-1-1">
												<span class="uk-form-icon" uk-icon="icon: user"></span>
												<input name="registerUser" class="uk-input uk-form-large" type="text" placeholder="Wähle einen Usernamen">
											</div>
										</div>
										<div class="uk-margin">
											<div class="uk-inline uk-width-1-1">
												<span class="uk-form-icon" uk-icon="icon: lock"></span>
												<input name="registerPassword" class="uk-input uk-form-large" type="password" placeholder="Wähle ein Passwort">
											</div>
										</div>
										<div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
											<label><input required class="uk-checkbox" type="checkbox"> Ich akzeptiere die Geschäftsbedingungen.</label>
										</div>
										<div class="uk-margin">
											<button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Registrieren</button>
										</div>
										<div class="uk-text-small uk-text-center">
											Hast du schon einen Account? <a href="#" uk-switcher-item="1">Einloggen</a>
										</div>
									</form>
								</li>
								<li>
									<h3 class="uk-card-title uk-text-center">Wilkommen zurück!</h3>
									<form action="login.php" method="POST">
										<div class="uk-margin">
											<div class="uk-inline uk-width-1-1">
												<span class="uk-form-icon" uk-icon="icon: user"></span>
												<input class="uk-input uk-form-large" type="text" name="user" placeholder="Username">
											</div>
										</div>
										<div class="uk-margin">
											<div class="uk-inline uk-width-1-1">
												<span class="uk-form-icon" uk-icon="icon: lock"></span>
												<input class="uk-input uk-form-large" name="pass" type="password" placeholder="Passwort">
											</div>
										</div>

										<div class="uk-margin">
											<button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Login</button>
										</div>
										<div class="uk-text-small uk-text-center">
											Nicht registriert? <a href="#" uk-switcher-item="0">Neuen Account erstellen</a>
										</div>
									</form>
								</li>

							</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>

	<script src="https://cdn.jsdelivr.net/npm/uikit@3.13.4/dist/js/uikit.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/uikit@3.13.4/dist/js/uikit-icons.min.js"></script>

</body>

</html>