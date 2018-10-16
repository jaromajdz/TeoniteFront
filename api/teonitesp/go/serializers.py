from rest_framework import serializers

from go.models import Authors

class AuthorsSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id_author',
            'author',
        )
        model = Authors
