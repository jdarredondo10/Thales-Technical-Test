Browser("thales colombia - Google").Page("thales colombia - Google").WebEdit("q").Set "thales colombia"

Browser("thales colombia - Google").Page("Thales International Suc.").WebButton("Dirección: Cra. 12 #93-8,").Click
Browser("thales colombia - Google").Page("Thales International Suc.").Check CheckPoint("Thales International Suc. Colombia - Google Maps_2")

Browser("thales colombia - Google").Page("Thales International Suc.").WebButton("Teléfono: 17442442").Click
Browser("thales colombia - Google").Page("Thales International Suc.").Check CheckPoint("Thales International Suc. Colombia - Google Maps_3")

Browser("thales colombia - Google").Page("Thales International Suc.").Link("Sitio web: thalesgroup.com").Click
Browser("Thales - Building a future").Page("Thales - Building a future").Sync

