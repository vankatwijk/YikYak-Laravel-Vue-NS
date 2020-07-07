<template>
    <section class="page-container page-account">
        <header-global></header-global>
        <!-- End header -->
            <v-content>
                <v-container>
                    <v-row
                    align="center"
                    justify="center"
                    >
                        <v-col
                            cols="12"
                            sm="8"
                            md="5"
                        >
                          <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                            >
                                <v-text-field
                                v-model="account_name"
                                :rules="nameRules"
                                label="Name"
                                required
                                ></v-text-field>

                                <v-text-field
                                v-model="account_email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                                ></v-text-field>

                                <v-text-field
                                v-model="entity_name"
                                :rules="nameRules"
                                label="Company Name"
                                required
                                ></v-text-field>

                                <v-btn
                                block
                                :disabled="!valid"
                                color="success"
                                class="mr-4"
                                @click="validate"
                                >
                                Save
                                </v-btn>
                            </v-form>
                            <!-- End Form -->
                        </v-col>
                        <!-- End Col -->
                    </v-row>
                    <!-- End Row -->
                </v-container>
                <!-- End Container -->
            </v-content>
            <!-- End Content -->
    </section>
    <!-- End Section -->                    
</template>

<script>
    export default {
        data() {
            return {
                account_name : this.$store.state.user,
                account_email : "",
                entity_name : this.$store.state.entity_name,

                valid: true,
                name: '',
                nameRules: [
                    v => !!v || 'Name is required',
                    //v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                select: null,
            }
        },
        methods : {
            saveAccountData : function() {
                // Base Url of App
                const baseUrl = localStorage.getItem('appUrl');
                // Custom Url for Api Call
                const accountUrl = baseUrl + '/api/details/';
                // Session Token
                const token = localStorage.getItem('session_token');
                // Headers
                const headers = {
                    'Content-Type' : 'application/json',
                    'Authorization' : 'Bearer '+ token,
                }

                this.$http.get(accountUrl , {
                    headers : headers
                })
                .then((result) => {
                    console.log(result);
                })

            },
            validate () {
                this.$refs.form.validate();
                this.saveAccountData();
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
        },
    }
 </script>