User.destroy_all
SearchHistory.destroy_all

uid1 = User.create(username: "Raymond", password: "password")
sh1 = SearchHistory.create(name: "Tylenol", count: 10)
sh2 = SearchHistory.create(name: "Alavert", count: 8)
sh3 = SearchHistory.create(name: "Lipitor", count: 15)
sh4 = SearchHistory.create(name: "Synthroid", count: 3)
sh5 = SearchHistory.create(name: "Prinivil", count: 11)
sh6 = SearchHistory.create(name: "Prilosec", count: 20)
sh7 = SearchHistory.create(name: "Glucophage", count: 19)
sh8 = SearchHistory.create(name: "Zocor", count: 9)