<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>ICT Semesterprojekt Dokumentation auf Notion</title><style>
/* cspell:disable-file */
/* webkit printing magic: print all background colors */
html {
	-webkit-print-color-adjust: exact;
}
* {
	box-sizing: border-box;
	-webkit-print-color-adjust: exact;
}

html,
body {
	margin: 0;
	padding: 0;
}
@media only screen {
	body {
		margin: 2em auto;
		max-width: 900px;
		color: rgb(55, 53, 47);
	}
}

body {
	line-height: 1.5;
	white-space: pre-wrap;
}

a,
a.visited {
	color: inherit;
	text-decoration: underline;
}

.pdf-relative-link-path {
	font-size: 80%;
	color: #444;
}

h1,
h2,
h3 {
	letter-spacing: -0.01em;
	line-height: 1.2;
	font-weight: 600;
	margin-bottom: 0;
}

.page-title {
	font-size: 2.5rem;
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 0.75em;
}

h1 {
	font-size: 1.875rem;
	margin-top: 1.875rem;
}

h2 {
	font-size: 1.5rem;
	margin-top: 1.5rem;
}

h3 {
	font-size: 1.25rem;
	margin-top: 1.25rem;
}

.source {
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 1.5em;
	word-break: break-all;
}

.callout {
	border-radius: 3px;
	padding: 1rem;
}

figure {
	margin: 1.25em 0;
	page-break-inside: avoid;
}

figcaption {
	opacity: 0.5;
	font-size: 85%;
	margin-top: 0.5em;
}

mark {
	background-color: transparent;
}

.indented {
	padding-left: 1.5em;
}

hr {
	background: transparent;
	display: block;
	width: 100%;
	height: 1px;
	visibility: visible;
	border: none;
	border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

img {
	max-width: 100%;
}

@media only print {
	img {
		max-height: 100vh;
		object-fit: contain;
	}
}

@page {
	margin: 1in;
}

.collection-content {
	font-size: 0.875rem;
}

.column-list {
	display: flex;
	justify-content: space-between;
}

.column {
	padding: 0 1em;
}

.column:first-child {
	padding-left: 0;
}

.column:last-child {
	padding-right: 0;
}

.table_of_contents-item {
	display: block;
	font-size: 0.875rem;
	line-height: 1.3;
	padding: 0.125rem;
}

.table_of_contents-indent-1 {
	margin-left: 1.5rem;
}

.table_of_contents-indent-2 {
	margin-left: 3rem;
}

.table_of_contents-indent-3 {
	margin-left: 4.5rem;
}

.table_of_contents-link {
	text-decoration: none;
	opacity: 0.7;
	border-bottom: 1px solid rgba(55, 53, 47, 0.18);
}

table,
th,
td {
	border: 1px solid rgba(55, 53, 47, 0.09);
	border-collapse: collapse;
}

table {
	border-left: none;
	border-right: none;
}

th,
td {
	font-weight: normal;
	padding: 0.25em 0.5em;
	line-height: 1.5;
	min-height: 1.5em;
	text-align: left;
}

th {
	color: rgba(55, 53, 47, 0.6);
}

ol,
ul {
	margin: 0;
	margin-block-start: 0.6em;
	margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
	margin-block-start: 0.6em;
}

ul > li {
	list-style: disc;
}

ul.to-do-list {
	text-indent: -1.7em;
}

ul.to-do-list > li {
	list-style: none;
}

.to-do-children-checked {
	text-decoration: line-through;
	opacity: 0.375;
}

ul.toggle > li {
	list-style: none;
}

ul {
	padding-inline-start: 1.7em;
}

ul > li {
	padding-left: 0.1em;
}

ol {
	padding-inline-start: 1.6em;
}

ol > li {
	padding-left: 0.2em;
}

.mono ol {
	padding-inline-start: 2em;
}

.mono ol > li {
	text-indent: -0.4em;
}

.toggle {
	padding-inline-start: 0em;
	list-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
	padding-left: 1.7em;
}

.toggle > li > details > summary {
	margin-left: -1.1em;
}

.selected-value {
	display: inline-block;
	padding: 0 0.5em;
	background: rgba(206, 205, 202, 0.5);
	border-radius: 3px;
	margin-right: 0.5em;
	margin-top: 0.3em;
	margin-bottom: 0.3em;
	white-space: nowrap;
}

.collection-title {
	display: inline-block;
	margin-right: 1em;
}

.simple-table {
	margin-top: 1em;
	font-size: 0.875rem;
	empty-cells: show;
}
.simple-table td {
	height: 29px;
	min-width: 120px;
}

.simple-table th {
	height: 29px;
	min-width: 120px;
}

.simple-table-header-color {
	background: rgb(247, 246, 243);
	color: black;
}
.simple-table-header {
	font-weight: 500;
}

time {
	opacity: 0.5;
}

.icon {
	display: inline-block;
	max-width: 1.2em;
	max-height: 1.2em;
	text-decoration: none;
	vertical-align: text-bottom;
	margin-right: 0.5em;
}

img.icon {
	border-radius: 3px;
}

.user-icon {
	width: 1.5em;
	height: 1.5em;
	border-radius: 100%;
	margin-right: 0.5rem;
}

.user-icon-inner {
	font-size: 0.8em;
}

.text-icon {
	border: 1px solid #000;
	text-align: center;
}

.page-cover-image {
	display: block;
	object-fit: cover;
	width: 100%;
	max-height: 30vh;
}

.page-header-icon {
	font-size: 3rem;
	margin-bottom: 1rem;
}

.page-header-icon-with-cover {
	margin-top: -0.72em;
	margin-left: 0.07em;
}

.page-header-icon img {
	border-radius: 3px;
}

.link-to-page {
	margin: 1em 0;
	padding: 0;
	border: none;
	font-weight: 500;
}

p > .user {
	opacity: 0.5;
}

td > .user,
td > time {
	white-space: nowrap;
}

input[type="checkbox"] {
	transform: scale(1.5);
	margin-right: 0.6em;
	vertical-align: middle;
}

p {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
}

.image {
	border: none;
	margin: 1.5em 0;
	padding: 0;
	border-radius: 0;
	text-align: center;
}

.code,
code {
	background: rgba(135, 131, 120, 0.15);
	border-radius: 3px;
	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-size: 85%;
	tab-size: 2;
}

code {
	color: #eb5757;
}

.code {
	padding: 1.5em 1em;
}

.code-wrap {
	white-space: pre-wrap;
	word-break: break-all;
}

.code > code {
	background: none;
	padding: 0;
	font-size: 100%;
	color: inherit;
}

blockquote {
	font-size: 1.25em;
	margin: 1em 0;
	padding-left: 1em;
	border-left: 3px solid rgb(55, 53, 47);
}

.bookmark {
	text-decoration: none;
	max-height: 8em;
	padding: 0;
	display: flex;
	width: 100%;
	align-items: stretch;
}

.bookmark-title {
	font-size: 0.85em;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 1.75em;
	white-space: nowrap;
}

.bookmark-text {
	display: flex;
	flex-direction: column;
}

.bookmark-info {
	flex: 4 1 180px;
	padding: 12px 14px 14px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.bookmark-image {
	width: 33%;
	flex: 1 1 180px;
	display: block;
	position: relative;
	object-fit: cover;
	border-radius: 1px;
}

.bookmark-description {
	color: rgba(55, 53, 47, 0.6);
	font-size: 0.75em;
	overflow: hidden;
	max-height: 4.5em;
	word-break: break-word;
}

.bookmark-href {
	font-size: 0.75em;
	margin-top: 0.25em;
}

.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.highlight-default {
	color: rgba(55, 53, 47, 1);
}
.highlight-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
}
.highlight-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.highlight-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.highlight-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.highlight-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.highlight-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.highlight-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.highlight-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.highlight-red {
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.highlight-gray_background {
	background: rgba(241, 241, 239, 1);
}
.highlight-brown_background {
	background: rgba(244, 238, 238, 1);
}
.highlight-orange_background {
	background: rgba(251, 236, 221, 1);
}
.highlight-yellow_background {
	background: rgba(251, 243, 219, 1);
}
.highlight-teal_background {
	background: rgba(237, 243, 236, 1);
}
.highlight-blue_background {
	background: rgba(231, 243, 248, 1);
}
.highlight-purple_background {
	background: rgba(244, 240, 247, 0.8);
}
.highlight-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.highlight-red_background {
	background: rgba(253, 235, 236, 1);
}
.block-color-default {
	color: inherit;
	fill: inherit;
}
.block-color-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
}
.block-color-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.block-color-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.block-color-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.block-color-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.block-color-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.block-color-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.block-color-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.block-color-red {
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.block-color-gray_background {
	background: rgba(241, 241, 239, 1);
}
.block-color-brown_background {
	background: rgba(244, 238, 238, 1);
}
.block-color-orange_background {
	background: rgba(251, 236, 221, 1);
}
.block-color-yellow_background {
	background: rgba(251, 243, 219, 1);
}
.block-color-teal_background {
	background: rgba(237, 243, 236, 1);
}
.block-color-blue_background {
	background: rgba(231, 243, 248, 1);
}
.block-color-purple_background {
	background: rgba(244, 240, 247, 0.8);
}
.block-color-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.block-color-red_background {
	background: rgba(253, 235, 236, 1);
}
.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }
.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }
.select-value-color-green { background-color: rgba(219, 237, 219, 1); }
.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }
.select-value-color-opaquegray { background-color: rgba(255, 255, 255, 0.0375); }
.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }
.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }
.select-value-color-red { background-color: rgba(255, 226, 221, 1); }
.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }
.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }

.checkbox {
	display: inline-flex;
	vertical-align: text-bottom;
	width: 16;
	height: 16;
	background-size: 16px;
	margin-left: 2px;
	margin-right: 5px;
}

.checkbox-on {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
	
</style></head><body><article id="0aba74f3-e7bf-48c4-b404-7b579753622a" class="page sans"><header><img class="page-cover-image" src="ICT%20Semesterprojekt%20Dokumentation%20auf%20Notion%20d55e886fa9774f25bd11b79fa4d9b18b/Screenshot_(412).png" style="object-position:center 50%"/><div class="page-header-icon page-header-icon-with-cover"><span class="icon">🖥️</span></div><h1 class="page-title">ICT Semesterprojekt Dokumentation auf Notion</h1></header><div class="page-body"><h1 id="5fa95133-c750-45d3-b806-1a2323014ec4" class="">Auswahl Projekt Thema</h1><p id="6f836ad6-fabe-4214-b520-ebbba0e0e79e" class="">In letzter Zeit nutzen wir durch die Aufstockung von Mitarbeitern im Geschäft und durch Projekte in der Freizeit immer mehr GitHub. Eine Pinnwand, die unsere GitHub-Projekte übersichtlich darstellen, war für uns daher naheliegend.</p><h1 id="7750113e-2eba-4a91-8177-6b1a3b969114" class="">ER-Model</h1><figure id="d55e886f-a977-4f25-bd11-b79fa4d9b18b" class="image"><a href="ICT%20Semesterprojekt%20Dokumentation%20auf%20Notion%20d55e886fa9774f25bd11b79fa4d9b18b/Untitled.png"><img style="width:1892px" src="ICT%20Semesterprojekt%20Dokumentation%20auf%20Notion%20d55e886fa9774f25bd11b79fa4d9b18b/Untitled.png"/></a></figure><h1 id="bc772808-15a8-44f9-b9e3-639bc1e5356d" class="">SQL</h1><p id="313dd7a0-89ca-4797-9a36-b01faff6cac6" class="">Das SQL Script erstellt vier Tabellen, welche folgend kurz beschrieben werden.<div class="indented"><p id="af8f07b3-005a-4c3a-a9c7-c974741a5b13" class=""><strong>users         </strong></p><p id="df320dc2-5d07-42e9-9518-01e2d5e421c5" class="">separate Tabelle für User-Daten (id, username, password)</p><p id="1073660a-c729-456c-afbb-81576f0e2fdb" class=""><strong>projects </strong>   </p><p id="324c5b0a-c515-4c50-9a16-34984f452161" class="">Haupttabelle für Projekte und deren Daten (z. B. title, description, url etc.)</p><p id="c3c799f9-107c-4f1c-84ea-28308c703c13" class=""><strong>languages</strong> </p><p id="b21743e3-33d8-421e-9a91-9e113f8a7cab" class="">Tabelle für Programmiersprachen, die einem Projekt zugewiesen werden können  </p><p id="f2c7a45d-5a50-466a-a93e-7b3018766ef2" class=""><strong>projects_languages_relation</strong> </p><p id="24bc23b4-5640-4689-9cea-ad9fb8d17649" class="">Zwischentabelle, die eine Relation zwischen projects und languages darstellt (Many-to-Many Relation), beinhaltet jeweils eine projects_id und eine language_id</p></div></p><h1 id="c8a152d1-9196-4544-8a67-460aa4654ff1" class="">Ordner und File Struktur</h1><div id="eaf42f97-7396-4021-9bdc-602d5650c858" class="column-list"><div id="9cf809a9-9aa7-4c9b-baab-a4fe854e4a32" style="width:50%" class="column"><figure id="6fa66335-2d1e-4b9f-ae80-33c6d066c58b" class="image"><a href="ICT%20Semesterprojekt%20Dokumentation%20auf%20Notion%20d55e886fa9774f25bd11b79fa4d9b18b/Untitled%201.png"><img style="width:344px" src="ICT%20Semesterprojekt%20Dokumentation%20auf%20Notion%20d55e886fa9774f25bd11b79fa4d9b18b/Untitled%201.png"/></a></figure></div><div id="be5b4847-ae86-468c-bd3c-cd3843220d51" style="width:50%" class="column"><figure id="732d672d-3881-4505-84a2-8f7acf08f63b" class="image"><a href="ICT%20Semesterprojekt%20Dokumentation%20auf%20Notion%20d55e886fa9774f25bd11b79fa4d9b18b/Untitled%202.png"><img style="width:348px" src="ICT%20Semesterprojekt%20Dokumentation%20auf%20Notion%20d55e886fa9774f25bd11b79fa4d9b18b/Untitled%202.png"/></a></figure></div></div><h2 id="b895f151-a348-4e97-bd01-f00cfb83b355" class="">PHP</h2><p id="3468dbba-4e0d-46a6-8139-8334eb3ab3a9" class="">Der PHP Code ist in die vier Ordner connection, dashboard, data und login aufgeteilt.</p><h3 id="81adccb2-33e1-441a-af58-b7f53e2c3b55" class="">Connection</h3><p id="fc9f750d-aaf2-4ae0-ac33-4556d82bde64" class="">Im Connection-Ordner ist die Verbindung zur Datenbank in einer Variable gespeichert. So kann dieses File dann jeweils bequem eingebunden werden, sollten wir eine Verbindung zur Datenbank brauchen.</p><h3 id="c0415a84-db3c-40e5-8036-36d1de338030" class="">Dashboard</h3><p id="3a5583be-348a-4674-992b-489e0ce01744" class="">Im Dashboard-Ordner ist das PHP-File für die Pinnwand enthalten, welches Session-Handling und ein Formular für das erstellen neuer Cards (Projekte) beinhaltet. Ausserdem sind dort auch die HTML-Wrapper für die Cards und das Modal zu finden.</p><h3 id="db596200-f055-4ec3-854d-e0a497bf5feb" class="">Login</h3><p id="41afafe2-7cdf-46a3-ba17-e652068773c1" class="">Um die Bonuspunkte abzuräumen beinhaltet unser Projekt auch ein Login.</p><p id="80ab7fb6-67a8-4021-a84f-c18bb1c7ecf5" class="">Das Login beinhaltet eine PHP-Funktion namens SESSION, welche einen sicheren Hash generiert, mithilfe dessen man den Client identifizieren kann. Im Dashboard wird man entsprechend zum Login weitergeleitet, wenn keine gültige Session-ID gefunden wird. So können sich nur User einloggen, die sich vorerst erfolgreich authentifizieren.</p><pre id="34b00fe8-3019-4d18-b845-3bfaef4adfc4" class="code"><code>// bei Übereinstimmung (username und password richtig) 
    if ($count === 1) {
        // starten einer php session, speichern des usernamen aus sessionvariable 
        session_start();
        $_SESSION[&#x27;userid&#x27;] = $username;
        // weiterleitung zum Dashboard
        header(&quot;Location: /login/dashboard.php?username=&quot; . $username);
    } else {
        // fehlermeldung da kein User mit entsprechender username/passwort kombination gefunden wurde
        echo &quot;
                &lt;h1&gt; Falsche Logindaten, bitte versuche es erneut oder regstriere dich. &lt;/h1&gt; 		
                    &lt;button onclick=&#x27;history.back()&#x27; class=&#x27;button&#x27;&gt;Zurück&lt;/button&gt;
           &quot;;
    }</code></pre><h2 id="637c1126-d243-4748-bbe4-e1228daa88a0" class="">JavaScript</h2><h3 id="2190642e-2205-4bd0-a6e1-9822d580804b" class="">services/services.js</h3><p id="d0ca3216-d0fd-44df-b5e4-ec51695acf4e" class="">In diesem File sind alle API-Services, also die Aufrufe an unsere REST-Endpoints. Bei Fehlern zeigen wir hier ausserdem eine Snackbar an.</p><h3 id="eca0bdfe-98b4-4296-88d3-0965a377a60b" class="">utils/utils.js</h3><p id="7e9ad0f8-10e7-4c13-a6af-3dcd1a7172a6" class="">Funktion für die Filterung der Sprachen und dem Ein- resp. Ausblenden des Modals. </p><h3 id="2ebc976d-2262-4acc-b4fb-3c3661c91588" class="">utils/validation.js</h3><p id="74579c5e-120c-4859-b721-0f195fff0010" class="">Inputvalidation (onclick/onblur) und einblenden der Snackbar mit dynamischer Error-Message.</p><h3 id="8ae54522-4e6b-45aa-90e3-c1eac3c7c027" class="">app.js</h3><p id="3370695c-becc-4fe4-a0f8-3acccf12cc13" class="">Alle JS-Files werden hier importiert und einige Event Listener werden definiert.</p><h3 id="6c90b289-3cea-4621-b245-74421a579aef" class="">card.js</h3><p id="edd47527-019a-4006-9be5-c76cfba14c87" class="">Logik für das Rendering der Cards und Funktionen für die Bearbeitung der Cards.</p><h3 id="6b99d74c-787f-473b-89e3-980923cb1790" class="">list.js</h3><p id="9512a502-2a55-4116-be83-d09db6f94e3c" class="">Logik für die Language Liste, mit welcher man die Programmiersprachen auswählen kann.</p><h3 id="0b6f5f28-4095-4c26-98ca-4c2c533fdba9" class="">render.js</h3><p id="7f071057-b5f7-44dc-b336-42e7eaddbe75" class="">Im Render File ist wenig Logik es sind vor allem Ausgaben von HTML-Elementen vorhanden.</p><h3 id="b9e10400-d05d-4c9e-bdc5-ea9ccf43f9a4" class="">tabs.js</h3><p id="4d9b4d57-479d-46d6-9ef8-d20f07f8a4e3" class="">Eine Funktion für den Wechsel zwischen Registrierung und Login.</p><h3 id="9d2227a5-5da8-4a5a-83ed-83c4d945bf37" class="">jsdocs</h3><p id="64db5a1d-4ec8-4abc-9cef-c6f2ee7c4eac" class="">Wir haben uns während dieser Arbeit auch mit jsdocs vertraut gemacht. Unsere Kommentare haben wir daher nach diesem Standard dokumentiert, dafür gibt es nämlich auch schon praktische Kürzel in VS-Code. Das coole daran ist, dass man dann ein HTML-File mit allen Funktionen automatisch generieren kann. Um das HTML-File zu betrachten, muss der URL lediglich /docs angehängt werden.</p><p id="ff7788f7-f18f-47ee-b47d-44fa9db7b5bd" class="">bspw: <a href="http://localhost/php-project/docs/">localhost/php-project/docs/</a></p><p id="385f299a-b796-46ab-b90e-f41860665a35" class="">
</p><h2 id="e041bf01-811f-4867-9578-0691a19ee730" class="">CSS</h2><p id="bff81144-84a4-4aee-a4ad-5c02f989e4a7" class="">Wir haben SCSS als Präprozessor für unser Styling benutzt. Wenn man SCSS kompiliert, wird daraus normales CSS generiert, welches wir dann in unser Projekt einbinden. Im Grunde ist SCSS nichts anderes wie CSS; es macht aber den Entwicklungsprozess etwas angenehmer. Wir haben ausserdem kein CSS-Framework eingebunden (bootstrap o. ä.), das ganze Projekt wurde mit purem CSS umgesetzt. </p><p id="354a311c-879b-4ecf-b447-5ea29c08e64e" class="">
</p><h1 id="9d4ac4e6-23e3-4068-86ed-81e29bc80d95" class="">API-Services</h1><p id="e8b7bfd7-e534-4fde-af08-db4e45a6d5a1" class="">Um die CRUD Funktionen in PHP zu erstellen haben wir eine Switch-Funktion mit je einem Case für eine Methode.</p><p id="08472eb0-adb2-414f-b5c8-fc6504cc6430" class="">Weil die Daten mithilfe von JS aus den Input-Feldern zu PHP geschickt werden, müssen die Dateien welche sich im JSON Formate befinden, mit <strong>json_decode </strong>für PHP lesbar gemacht werden. Diese umkodierung wird für <strong>POST</strong> und <strong>PUT</strong> verwendet.
Für <strong>GET </strong>benötigt man json_encode.</p><p id="25887f1b-73f5-4a8b-b8ba-dbf8fda672af" class="">Aufgerufen wird die API mit JavaScript.</p><h1 id="3bbc0c26-a34c-4ad4-9c92-da567b83fc25" class="">Asynchrone Funktionen</h1><p id="14343abd-06bb-4433-81ec-9b9a1b4e0d74" class="">Anstelle von <strong>then/catch</strong> haben wir für unsere asynchrone Funktionen <strong>async/await</strong> benutzt. Diese Funktion ist seit der Einführung von ES6 verfügbar, oft kann es unseren Code leserlicher machen, es erledigt aber die gleiche Aufgabe.</p><p id="006c29bb-1ebf-4c94-bd60-350e97ea0d6a" class="">
</p><p id="c8e24a5b-f43d-45ed-a56c-f668222ce1ef" class="">Hier ein Beispiel für den Aufruf unseres <strong>GET </strong>Endpoints:</p><pre id="40347b68-05eb-4362-b696-aeae48823526" class="code"><code>// Projekte (Karten) laden und response als JSON zurückgeben
async function ladeProject() {
  const response = await fetch(&quot;../data/portfolio.php&quot;);

  if (response.ok) {
    return await response.json();
  }
  // Snackbar zeigen bei Fehler
  else {
    showSnackbar(&quot;Fehler beim Abrufen der Daten&quot;);
  }
}</code></pre><p id="8a2d51f4-9b82-4e2d-8d2e-2c88af297cac" class="">Der Unterschied zwischen async und then liegt darin, dass async die Ausführung der Funktion anhält, bis das Promise erfüllt ist. Mit then wird die Funktion weiter ausgeführt aber den .then-Callback erst, wenn das Promise erfüllt ist.</p><p id="d196a7c2-38a1-4903-a3f5-a0bea359a2ab" class=""><strong>weiterführende Informationen: </strong></p><p id="5eb5e76d-ee15-4872-b939-861d0761f8e2" class=""><a href="https://www.smashingmagazine.com/2020/11/comparison-async-await-versus-then-catch/">https://www.smashingmagazine.com/2020/11/comparison-async-await-versus-then-catch/</a></p><h1 id="49987c97-b930-4a2f-a386-44ea95182156" class="">Cards</h1><p id="878f7f3c-5c64-4206-9e11-9e2cbb6a2c79" class="">Beim Klicken auf eine Card öffnet sich ein Pop-up Window. Der Mülleimer ist für Löschen und der Stift für Bearbeitung. In der Übersichtsansicht sind der Titel, Beschreibung, Programmiersprachen und ein Bild zu sehen. In der Detailansicht ist zusätzlich der Link zum Projekt plus das Erstellungsdatum zu sehen.</p><h1 id="2be2f407-ccb4-439a-aaf7-8092c68a66bc" class="">Links</h1><p id="5850f5a4-ead7-4f27-a635-92e72c1045f5" class="">
</p><figure id="0aba74f3-e7bf-48c4-b404-7b579753622a" class="link-to-page"><a href="ICT%20Semesterprojekt%20Dokumentation%20auf%20Notion%20d55e886fa9774f25bd11b79fa4d9b18b.html"><span class="icon">🖥️</span>ICT Semesterprojekt Dokumentation auf Notion</a></figure><div id="717b013e-dd0f-470b-9f89-b99ef7263de5" class="column-list"><div id="2d8975c5-4efd-47ee-b874-477bca349a4a" style="width:68.75%" class="column"><figure id="e0cdee5f-2624-4944-b9ad-ab43b29cb991"><a href="https://github.com/0xStoff/php-project" class="bookmark source"><div class="bookmark-info"><div class="bookmark-text"><div class="bookmark-title">GitHub - 0xStoff/php-project</div><div class="bookmark-description">You can&#x27;t perform that action at this time. You signed in with another tab or window. You signed out in another tab or window. Reload to refresh your session. Reload to refresh your session.</div></div><div class="bookmark-href"><img src="https://github.com/favicon.ico" class="icon bookmark-icon"/>https://github.com/0xStoff/php-project</div></div><img src="https://opengraph.githubassets.com/bd2a8f6ad890458678a298b6dd65e926f0d5c05a6ec527736bfa76c95ad99b72/0xStoff/php-project" class="bookmark-image"/></a></figure></div><div id="6b093c4b-e19b-4495-82a7-ce3240c942ea" style="width:31.25%" class="column"><p id="735acb21-b578-4005-83a2-8de6093d3437" class="">
</p><p id="8251d2eb-32e7-4629-abb0-f8435a2af869" class="">
</p></div></div></div></article></body></html>
