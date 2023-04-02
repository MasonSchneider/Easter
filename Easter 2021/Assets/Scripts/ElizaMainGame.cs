using UnityEngine;

public class ElizaMainGame : MonoBehaviour
{

    private Material oldSkybox;

    [SerializeField]
    private AudioSource backgroundSound;

    private void Awake()
    {
        oldSkybox = RenderSettings.skybox;
        RenderSettings.skybox = null;
        DynamicGI.UpdateEnvironment();
        backgroundSound.Play();
    }

    private void OnDestroy()
    {
        RenderSettings.skybox = oldSkybox;
        DynamicGI.UpdateEnvironment();
    }
}
