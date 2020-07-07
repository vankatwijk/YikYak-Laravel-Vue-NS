<template>
    <v-container
        class="fill-height container-bk"
        fluid
    >
        <v-row
        align="center"
        justify="center"
        >
        <v-col
            cols="12"
            sm="8"
            md="4"
        >
            <v-card class="elevation-12 autentication-form">
                <v-toolbar
                flat
                >
                <v-toolbar-title>Entity Name</v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                <v-form>
                    <v-text-field
                    id="entity_name"
                    label="Entity Name"
                    v-model="entity_name"
                    name="entity"
                    prepend-icon="mdi-domain"
                    type="text"
                    ></v-text-field>

                </v-form>
                </v-card-text>
                <v-card-actions>
                    <!-- <router-link to="/" class="link-url"> -->
                        <v-btn color="primary"
                        x-large
                        block
                        @click="setEntityName"
                        >Continue</v-btn>
                    <!-- </router-link> -->
                </v-card-actions>

            </v-card>
            <!-- End V Card -->
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            entity_name : ""
        }
    },

    methods : {
        setEntityName : function() {
            // Base Url of App
            const baseUrl = localStorage.getItem('appUrl');
            // Custom Url for Api Call
            const entityUrl = baseUrl + '/api/entity';
            // Session Token
            const token = localStorage.getItem('session_token');
            // Header to post Request
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token,
            }
            // Data to send to post Request
            const data = {
                name: this.entity_name
            }
            
            // console.log(headers);
            // console.log(token);
            console.log(this.entity_name);

            this.$http.post(entityUrl, data ,{
                headers: headers,
            })
            .then((result) => {
                console.log(result);
                let entityName = result.data.success.name;

                this.$store.dispatch('setEntityName',{
                    entity: entityName
                });
                this.$emit('EntityCreated');

                //this.$router.push('/')

            })
        }
    }
}
</script>

<style scoped>
</style>