from django.db import models


class File(models.Model):
    Fileid = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=50)
    f_size = models.CharField(max_length=50)
    content = models.TextField()
    modified_date = models.DateField()
    created_date = models.DateField()
    Hashvalue = models.CharField(max_length=50)







