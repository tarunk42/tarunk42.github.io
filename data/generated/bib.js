define({ entries : {
    "antoniou2018data": {
        "abstract": "Effective training of neural networks requires much data. In the low-data regime, parameters are underdetermined, and learnt networks generalise poorly. Data Augmentation alleviates this by using existing data more effectively. However standard data augmentation produces only limited plausible alternative data. Given there is potential to generate a much broader set of augmentations, we design and train a generative model to do data augmentation. The model, based on image conditional Generative Adversarial Networks, takes data from a source domain and learns to take any data item and generalise it to generate other within-class data items. As this generative process does not depend on the classes themselves, it can be applied to novel unseen classes of data. We show that a Data Augmentation Generative Adversarial Network (DAGAN) augments standard vanilla classifiers well. We also show a DAGAN can enhance few-shot learning systems such as Matching Networks. We demonstrate these approaches on Omniglot, on EMNIST having learnt the DAGAN on Omniglot, and VGG-Face data. In our experiments we can see over 13% increase in accuracy in the low-data regime experiments in Omniglot (from 69% to 82%), EMNIST (73.9% to 76%) and VGG-Face (4.5% to 12%); in Matching Networks for Omniglot we observe an increase of 0.5% (from 96.9% to 97.4%) and an increase of 1.8% in EMNIST (from 59.5% to 61.3%).",
        "archiveprefix": "arXiv",
        "author": "Antreas Antoniou and Amos Storkey and Harrison Edwards",
        "eprint": "1711.04340",
        "primaryclass": "stat.ML",
        "title": "Data Augmentation Generative Adversarial Networks",
        "type": "misc",
        "year": "2018"
    },
    "costa2022exploring": {
        "abstract": "In the context of generative models, text-to-image generation achieved impressive results in recent years. Models using different approaches were proposed and trained in huge datasets of pairs of texts and images. However, some methods rely on pre-trained models such as Generative Adversarial Networks, searching through the latent space of the generative model by using a gradient-based approach to update the latent vector, relying on loss functions such as the cosine similarity. In this work, we follow a different direction by proposing the use of Covariance Matrix Adaptation Evolution Strategy to explore the latent space of Generative Adversarial Networks. We compare this approach to the one using Adam and a hybrid strategy. We design an experimental study to compare the three approaches using different text inputs for image generation by adapting an evaluation method based on the projection of the resulting samples into a two-dimensional grid to inspect the diversity of the distributions. The results evidence that the evolutionary method achieves more diversity in the generation of samples, exploring different regions of the resulting grids. Besides, we show that the hybrid method combines the explored areas of the gradient-based and evolutionary approaches, leveraging the quality of the results.",
        "archiveprefix": "arXiv",
        "author": "Victor Costa and Nuno Louren\u00e7o and Jo\u00e3o Correia and Penousal Machado",
        "eprint": "2207.02907",
        "primaryclass": "cs.NE",
        "title": "Exploring Generative Adversarial Networks for Text-to-Image Generation with Evolution Strategies",
        "type": "misc",
        "year": "2022"
    },
    "goodfellow2014generative": {
        "abstract": "We propose a new framework for estimating generative models via an adversarial process, in which we simultaneously train two models: a generative model G that captures the data distribution, and a discriminative model D that estimates the probability that a sample came from the training data rather than G. The training procedure for G is to maximize the probability of D making a mistake. This framework corresponds to a minimax two-player game. In the space of arbitrary functions G and D, a unique solution exists, with G recovering the training data distribution and D equal to 1/2 everywhere. In the case where G and D are defined by multilayer perceptrons, the entire system can be trained with backpropagation. There is no need for any Markov chains or unrolled approximate inference networks during either training or generation of samples. Experiments demonstrate the potential of the framework through qualitative and quantitative evaluation of the generated samples.",
        "archiveprefix": "arXiv",
        "author": "Ian J. Goodfellow and Jean Pouget-Abadie and Mehdi Mirza and Bing Xu and David Warde-Farley and Sherjil Ozair and Aaron Courville and Yoshua Bengio",
        "eprint": "1406.2661",
        "primaryclass": "stat.ML",
        "title": "Generative Adversarial Networks",
        "type": "misc",
        "year": "2014"
    },
    "goodfellow2015explaining": {
        "abstract": "Several machine learning models, including neural networks, consistently misclassify adversarial examples---inputs formed by applying small but intentionally worst-case perturbations to examples from the dataset, such that the perturbed input results in the model outputting an incorrect answer with high confidence. Early attempts at explaining this phenomenon focused on nonlinearity and overfitting. We argue instead that the primary cause of neural networks' vulnerability to adversarial perturbation is their linear nature. This explanation is supported by new quantitative results while giving the first explanation of the most intriguing fact about them: their generalization across architectures and training sets. Moreover, this view yields a simple and fast method of generating adversarial examples. Using this approach to provide examples for adversarial training, we reduce the test set error of a maxout network on the MNIST dataset",
        "archiveprefix": "arXiv",
        "author": "Ian J. Goodfellow and Jonathon Shlens and Christian Szegedy",
        "eprint": "1412.6572",
        "primaryclass": "stat.ML",
        "title": "Explaining and Harnessing Adversarial Examples",
        "type": "misc",
        "year": "2015"
    },
    "karras2019stylebased": {
        "abstract": "We propose an alternative generator architecture for generative adversarial networks, borrowing from style transfer literature. The new architecture leads to an automatically learned, unsupervised separation of high-level attributes (e.g., pose and identity when trained on human faces) and stochastic variation in the generated images (e.g., freckles, hair), and it enables intuitive, scale-specific control of the synthesis. The new generator improves the state-of-the-art in terms of traditional distribution quality metrics, leads to demonstrably better interpolation properties, and also better disentangles the latent factors of variation. To quantify interpolation quality and disentanglement, we propose two new, automated methods that are applicable to any generator architecture. Finally, we introduce a new, highly varied and high-quality dataset of human faces.",
        "archiveprefix": "arXiv",
        "author": "Tero Karras and Samuli Laine and Timo Aila",
        "eprint": "1812.04948",
        "primaryclass": "cs.NE",
        "title": "A Style-Based Generator Architecture for Generative Adversarial Networks",
        "type": "misc",
        "year": "2019"
    },
    "karras2020training": {
        "abstract": "Training generative adversarial networks (GAN) using too little data typically leads to discriminator overfitting, causing training to diverge. We propose an adaptive discriminator augmentation mechanism that significantly stabilizes training in limited data regimes. The approach does not require changes to loss functions or network architectures, and is applicable both when training from scratch and when fine-tuning an existing GAN on another dataset. We demonstrate, on several datasets, that good results are now possible using only a few thousand training images, often matching StyleGAN2 results with an order of magnitude fewer images. We expect this to open up new application domains for GANs. We also find that the widely used CIFAR-10 is, in fact, a limited data benchmark, and improve the record FID from 5.59 to 2.42.",
        "archiveprefix": "arXiv",
        "author": "Tero Karras and Miika Aittala and Janne Hellsten and Samuli Laine and Jaakko Lehtinen and Timo Aila",
        "eprint": "2006.06676",
        "primaryclass": "cs.CV",
        "title": "Training Generative Adversarial Networks with Limited Data",
        "type": "misc",
        "year": "2020"
    },
    "mirza2014conditional": {
        "abstract": "Generative Adversarial Nets [8] were recently introduced as a novel way to train generative models. In this work we introduce the conditional version of generative adversarial nets, which can be constructed by simply feeding the data, y, we wish to condition on to both the generator and discriminator. We show that this model can generate MNIST digits conditioned on class labels. We also illustrate how this model could be used to learn a multi-modal model, and provide preliminary examples of an application to image tagging in which we demonstrate how this approach can generate descriptive tags which are not part of training labels.",
        "archiveprefix": "arXiv",
        "author": "Mehdi Mirza and Simon Osindero",
        "eprint": "1411.1784",
        "primaryclass": "cs.LG",
        "title": "Conditional Generative Adversarial Nets",
        "type": "misc",
        "year": "2014"
    },
    "radford2016unsupervised": {
        "abstract": "In recent years, supervised learning with convolutional networks (CNNs) has seen huge adoption in computer vision applications. Comparatively, unsupervised learning with CNNs has received less attention. In this work we hope to help bridge the gap between the success of CNNs for supervised learning and unsupervised learning. We introduce a class of CNNs called deep convolutional generative adversarial networks (DCGANs), that have certain architectural constraints, and demonstrate that they are a strong candidate for unsupervised learning. Training on various image datasets, we show convincing evidence that our deep convolutional adversarial pair learns a hierarchy of representations from object parts to scenes in both the generator and discriminator. Additionally, we use the learned features for novel tasks - demonstrating their applicability as general image representations.",
        "archiveprefix": "arXiv",
        "author": "Alec Radford and Luke Metz and Soumith Chintala",
        "eprint": "1511.06434",
        "primaryclass": "cs.LG",
        "title": "Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks",
        "type": "misc",
        "year": "2016"
    },
    "sauer2023stylegant": {
        "abstract": "Text-to-image synthesis has recently seen significant progress thanks to large pretrained language models, large-scale training data, and the introduction of scalable model families such as diffusion and autoregressive models. However, the best-performing models require iterative evaluation to generate a single sample. In contrast, generative adversarial networks (GANs) only need a single forward pass. They are thus much faster, but they currently remain far behind the state-of-the-art in large-scale text-to-image synthesis. This paper aims to identify the necessary steps to regain competitiveness. Our proposed model, StyleGAN-T, addresses the specific requirements of large-scale text-to-image synthesis, such as large capacity, stable training on diverse datasets, strong text alignment, and controllable variation vs. text alignment tradeoff. StyleGAN-T significantly improves over previous GANs and outperforms distilled diffusion models - the previous state-of-the-art in fast text-to-image synthesis - in terms of sample quality and speed.",
        "archiveprefix": "arXiv",
        "author": "Axel Sauer and Tero Karras and Samuli Laine and Andreas Geiger and Timo Aila",
        "eprint": "2301.09515",
        "primaryclass": "cs.LG",
        "title": "StyleGAN-T: Unlocking the Power of GANs for Fast Large-Scale Text-to-Image Synthesis",
        "type": "misc",
        "year": "2023"
    },
    "tanaka2019data": {
        "abstract": "In this paper we propose the use of Generative Adversarial Networks (GAN) to generate artificial training data for machine learning tasks. The generation of artificial training data can be extremely useful in situations such as imbalanced data sets, performing a role similar to SMOTE or ADASYN. It is also useful when the data contains sensitive information, and it is desirable to avoid using the original data set as much as possible (example: medical data). We test our proposal on benchmark data sets using different network architectures, and show that a Decision Tree (DT) classifier trained using the training data generated by the GAN reached the same, (and surprisingly sometimes better), accuracy and recall than a DT trained on the original data set.",
        "archiveprefix": "arXiv",
        "author": "Fabio Henrique Kiyoiti dos Santos Tanaka and Claus Aranha",
        "eprint": "1904.09135",
        "primaryclass": "cs.LG",
        "title": "Data Augmentation Using GANs",
        "type": "misc",
        "year": "2019"
    }
}});