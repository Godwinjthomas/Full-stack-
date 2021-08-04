from rest_framework import serializers
from Textapp.models import File


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = ('Fileid', 'Name', 'f_size', 'content', 'modified_date', 'created_date', 'Hashvalue')
