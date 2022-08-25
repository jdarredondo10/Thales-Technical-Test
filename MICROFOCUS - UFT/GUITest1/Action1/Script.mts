DataTable.AddSheet("MySheet")
ParamName=DataTable.GetSheet("MySheet").AddParameter("Location", 1) @@ script infofile_;_ZIP::ssf13.xml_;_
ParamName=DataTable.GetSheet("MySheet").AddParameter("Name" , 1)

DataTable.SetCurrentRow(1)
DataTable.Value(1,"MySheet") = 1

DataTable.SetCurrentRow(1)
DataTable.Value(2,"MySheet") = "Parque de Japón - Google"

DataTable.SetCurrentRow(2)
DataTable.Value(1,"MySheet") = 2

DataTable.SetCurrentRow(2)
DataTable.Value(2,"MySheet") = "Parque Urbano El Virrey"

DataTable.SetCurrentRow(3)
DataTable.Value(1,"MySheet") = 3

DataTable.SetCurrentRow(3)
DataTable.Value(2,"MySheet") = "Parque CHAPINERO - Google"

DataTable.SetCurrentRow(4)
DataTable.Value(1,"MySheet") = 4

DataTable.SetCurrentRow(4)
DataTable.Value(2,"MySheet") = "Parque de Japón - Google"

DataTable.SetCurrentRow(5)
DataTable.Value(1,"MySheet") = 5

DataTable.SetCurrentRow(5)
DataTable.Value(2,"MySheet") = "VEREDA EL VERJÓN DE TEUSACÁ"

DataTable.Export("C:\Users\jarre\DATATABLE.xls")
 @@ script infofile_;_ZIP::ssf31.xml_;_
